import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b1432caeba4703718d66231763682876';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};
axios.defaults.headers.common['accept'] = 'application/json';

export const getTrendingFilm = async () => {
  const { data } = await axios(`trending/all/day`);

  return data;
};

export const getInfoFilm = async id => {
  const { data } = await axios(`movie/${id}`);

  return data;
};

export const getCast = async id => {
  const { data } = await axios(`movie/${id}/credits`);

  return data;
};

export const geReviews = async id => {
  const { data } = await axios(`movie/${id}/reviews`);

  return data;
};
