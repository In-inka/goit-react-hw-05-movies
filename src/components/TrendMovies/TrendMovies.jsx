import { useEffect, useState } from 'react';
import * as Api from '../../service/Api.js';

import { Item, Link } from '../TrendMovies/TrendMovies.styled.jsx';
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
        <Item key={id}>
          <Link to={`/movies/${id}`}>{original_title || original_name}</Link>
        </Item>
      ))}
    </ul>
  );
};

export default TrendMovies;
