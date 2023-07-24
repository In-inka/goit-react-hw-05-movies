import * as Api from '../../service/Api.js';
import * as data from '../../service/data.js';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import {
  Movie,
  Container,
  Link,
  Picture,
  LinkBack,
  BackIcon,
} from './MovieDetails.styled.jsx';
import picture from '../../images/no-image.jpg';

const MovieDetails = () => {
  const location = useLocation();
  const locationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const infoFilm = async id => {
      try {
        const results = await Api.getInfoFilm(id);
        setMovie([results]);
      } catch (error) {
        setError(error);
      }
    };
    infoFilm(movieId);
  }, [movieId]);

  return (
    <Container>
      <LinkBack to={locationRef.current}>
        <BackIcon />
        Go to back
      </LinkBack>
      {error &&
        Notify.failure(`Ooopss....:( ${error})`, { position: 'center-top' })}
      <div>
        {movie.map(
          ({
            genres,
            poster_path,
            title,
            overview,
            vote_average,
            release_date,
          }) => {
            return (
              <Movie key={movieId}>
                {poster_path ? (
                  <Picture
                    src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                    alt={title}
                    width="342"
                  />
                ) : (
                  <Picture
                    src={`${picture}`}
                    alt={title}
                    width="342"
                    height="513"
                  />
                )}
                <div>
                  <h2>
                    <b>
                      {title} ({data.years(release_date)})
                    </b>
                  </h2>
                  <p>
                    <b>User Score:</b> {Math.round(vote_average * 10)}%
                  </p>
                  <p>
                    <b>Overview</b>
                  </p>
                  <p>{overview}</p>
                  <p>
                    <b>Genres</b>
                  </p>
                  <p>{genres.map(({ name }) => name).join(' ')}</p>
                </div>
              </Movie>
            );
          }
        )}
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<ThreeDots color="rgba(65, 88, 136, 1)" />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
