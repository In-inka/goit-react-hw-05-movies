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

const SearchMovies = () => {
  const [nameFilm, setNameFilm] = useState('');
  const [filmList, setFilmList] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: ({ name }, { resetForm }) => {
      setNameFilm(name);
      resetForm();
    },
  });

  useEffect(() => {
    Api.geSearchMovies(nameFilm)
      .then(({ results }) => {
        setFilmList([...results]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [nameFilm]);

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
            placeholder="Search images and photos"
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
