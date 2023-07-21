import { Item, Link } from '../Movies/Movies.styled';

const Movies = ({ films }) => {
  return (
    <>
      {films.map(({ id, original_title, original_name }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`}>{original_title || original_name}</Link>
        </Item>
      ))}
    </>
  );
};

export default Movies;
