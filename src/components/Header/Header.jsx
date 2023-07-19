import { Link, Navigation, Head } from './Header.styled';

const Header = () => {
  return (
    <Head>
      <Navigation>
        <Link aria-current="page" to="/">
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </Navigation>
    </Head>
  );
};

export default Header;
