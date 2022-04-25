import PropTypes from 'prop-types';
import CountryDataLeftCol from './CountryDataLeftCol';
import CountryDataRightCol from './CountryDataRightCol';
import styles from './CountryData.module.scss';

const IndividualCountryData = ({ countryData }) => (
  <div className={styles.country_data}>
    <h2 className={styles.country_data_name}>{countryData.name.common}</h2>
    <div className={styles.country_data_items}>
      <CountryDataLeftCol countryData={countryData} />
      <CountryDataRightCol countryData={countryData} />
    </div>
  </div>
);

IndividualCountryData.propTypes = {
  countryData: PropTypes.object.isRequired,
};

export default IndividualCountryData;
