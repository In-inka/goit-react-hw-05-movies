import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '../Layout/Layout.jsx';

const HomePage = lazy(() => import('../pages/Home'));
const MoviesPage = lazy(() => import('../pages/Movies/'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const ErrorPage = lazy(() => import('../pages/Error'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Review'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
