import * as Api from '../../service/Api.js';

import { useFormik } from 'formik';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import {
  SearchForm,
  Btn,
  Label,
  MyStyledInput,
  Container,
} from './SearchMovies.styled';

import Movies from '../Movies';

const SearchMovies = () => {
  const [filmList, setFilmList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const formik = useFormik({
    initialValues: {
      name: query,
    },
    onSubmit: ({ name }) => {
      if (name === ' ') {
        return setSearchParams({});
      }
      setSearchParams({ query: name });
    },
  });

  useEffect(() => {
    if (query === '') {
      Notify.info('Please enter the name of the movie', {
        position: 'center-top',
      });
      return;
    }
    setIsLoading(false);
    Loading.dots({ backgroundColor: 'rgb(65, 88, 136, 0.2)' });
    searchMovies(query);
  }, [query]);

  const searchMovies = async query =>
    Api.geSearchMovies(query)
      .then(({ results }) => {
        setFilmList([...results]);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(true);
        Loading.remove();
        Notify.success('Successful', { position: 'center-top' });
      });

  return (
    <>
      <Container>
        <SearchForm htmlFor="name" onSubmit={formik.handleSubmit}>
          <Btn type="submit">
            <Label>Search</Label>
          </Btn>
          <MyStyledInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </SearchForm>
      </Container>
      {error &&
        Notify.failure(`Ooopss....:( ${error})`, { position: 'center-top' })}
      <ul>{isLoading && <Movies films={filmList} />}</ul>
    </>
  );
};

/* Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}; */

export default SearchMovies;
