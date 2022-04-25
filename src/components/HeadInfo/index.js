import Head from 'next/head';
import PropTypes from 'prop-types';

const HeadInfo = ({ name, url }) => (
  <Head>
    <title>{name}</title>
    {url && <link rel='icon' type='image/png' href={url} />}
  </Head>
);

HeadInfo.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

HeadInfo.defaultProps = {
  name: 'Where in the world?',
  url: '',
};

export default HeadInfo;
