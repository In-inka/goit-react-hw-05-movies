import { useFormik } from 'formik';
//import PropTypes from 'prop-types';
import {
  SearchForm,
  Btn,
  Label,
  MyStyledInput,
  Container,
  Item,
  Link,
} from './SearchMovies.styled';
import { useEffect, useState } from 'react';
import * as Api from '../../service/Api.js';
import { useSearchParams } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

const SearchMovies = () => {
  const [filmList, setFilmList] = useState([]);
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
      toast.error('Please enter the name of the movie');
      return;
    }
    Api.geSearchMovies(query)
      .then(({ results }) => {
        setFilmList([...results]);
      })
      .catch(error => {
        setError(error);
      });
  }, [query]);

  return (
    <>
      <Container>
        <Toaster position="top-center" reverseOrder={false} />
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
      <ul>
        {filmList.map(({ id, original_title, original_name }) => (
          <Item key={id}>
            <Link to={`/movies/${id}`}>{original_title || original_name}</Link>
          </Item>
        ))}
      </ul>
    </>
  );
};

/* Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}; */

export default SearchMovies;
