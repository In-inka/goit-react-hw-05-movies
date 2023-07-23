import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Item, Link } from '../Movies/Movies.styled';

const Movies = ({ films }) => {
  const location = useLocation();
  return (
    <>
      {films.map(({ id, original_title, original_name }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {original_title || original_name}
          </Link>
        </Item>
      ))}
    </>
  );
};

Movies.propTypes = {
  films: PropTypes.array.isRequired,
};
export default Movies;
