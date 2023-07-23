import * as Api from '../../service/Api.js';

import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Movies from '../Movies';
import { Trend, Title } from './TrendMovie.styled.jsx';

const TrendMovies = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    Api.getTrendingFilm()
      .then(({ results }) => {
        setTrendMovies([...results]);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <Trend>
      {error &&
        Notify.failure(`Ooopss....:( ${error})`, { position: 'center-top' })}
      <Title>Trending movies</Title>
      <ul>
        <Movies films={trendMovies} />
      </ul>
    </Trend>
  );
};

export default TrendMovies;
