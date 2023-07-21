import * as Api from '../../service/Api.js';
import * as data from '../../service/data.js';
import { useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Movie, Container, Link, Picture } from './MoviesInfo.styled';

const MoviesInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    Api.getInfoFilm(movieId)
      .then(result => {
        console.log(result);
        setMovie([result]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [movieId]);

  return (
    <Container>
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
                <Picture
                  src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                  alt={title}
                  width="342"
                />
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
      <Outlet />
    </Container>
  );
};

export default MoviesInfo;
