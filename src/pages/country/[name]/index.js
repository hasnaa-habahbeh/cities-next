import PropTypes from 'prop-types';
import HeadInfo from '../../../components/HeadInfo';
import BackButton from '../../../components/Shared/BackButton';
import BorderCountries from '../../../components/Country/BorderCountries';
import CountryData from '../../../components/Country/CountryData';
import Spinner from '../../../components/Shared/Spinner';
import { FILTER_BY_NAME_ENDPOINT } from '../../../constants/urls';
import styles from '../../../styles/pages/Country.module.scss';

const Country = ({ countryData }) => {
  const {
    name: { common },
    flags: { png },
    borders,
  } = countryData;

  return (
    <>
      <HeadInfo name={common} url={png} />
      <div className={`space-from-edges`}>
        <BackButton />
        {common ? (
          <div className={styles.country}>
            <img
              className={styles.country_flag}
              src={png}
              alt={`${common}'s flag`}
            />
            <CountryData countryData={countryData} />
            {borders && <BorderCountries borderCountries={borders} />}
          </div>
        ) : (
          <div className={styles.country}>
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};

Country.prpTypes = {
  countryData: PropTypes.object.isRequired,
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`${FILTER_BY_NAME_ENDPOINT}/${context.params.name}`);
  const countryData = await res.json();
  return {
    props: {
      countryData: countryData[0] || {
        name: { common: '' },
        flags: { png: '' },
        borders: [],
      },
    },
  };
};

export default Country;
