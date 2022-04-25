import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import { wrapper } from '../store';
import '../styles/index.scss';

const App = ({ Component, pageProps }) => {
  const currentTheme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.classList.add(`${currentTheme}`);
  }, [currentTheme]);

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(App);
