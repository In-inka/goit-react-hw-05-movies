import { useParams, NavLink, Outlet } from 'react-router-dom';
import * as Api from '../../service/Api.js';
import { useEffect, useState } from 'react';

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
    <div>
      <NavLink to="/">go to back</NavLink>
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
              <>
                <img
                  src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                  alt={title}
                  width="342"
                />
                <p>
                  {title} {release_date}
                </p>
                <p>User Score: {vote_average}</p>
                <p>Overview</p>
                <p>{overview}</p>
                <p>Genres</p>
                <p>{genres.map(({ name }) => name).join(' ')}</p>
              </>
            );
          }
        )}
      </div>
      <ul>
        <li>
          <NavLink to="cast">cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MoviesInfo;
