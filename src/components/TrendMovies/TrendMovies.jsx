import { useEffect, useState } from 'react';
import * as Api from '../../service/Api.js';
import { NavLink } from 'react-router-dom';
const TrendMovies = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    Api.getTrendingFilm()
      .then(({ results }) => {
        setTrendMovies([...results]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <ul>
      {trendMovies.map(({ id, original_title, original_name }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`}>
            {original_title || original_name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default TrendMovies;
