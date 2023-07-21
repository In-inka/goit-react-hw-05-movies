import { useEffect, useState } from 'react';
import * as Api from '../../service/Api.js';
import Movies from '../Movies/Movies.jsx';

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
    <>
      <h2>Trending movies</h2>
      <ul>
        <Movies films={trendMovies} />
      </ul>
    </>
  );
};

export default TrendMovies;
