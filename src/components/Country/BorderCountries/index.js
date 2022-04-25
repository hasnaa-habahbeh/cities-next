import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './BorderCountries.module.scss';
import containerStyles from '../CountryData/CountryData.module.scss';

const BorderCountries = ({ borderCountries }) => (
  <p className={styles.border_countries}>
    <span className={containerStyles.data_field_heading}>
      Border Countries:{' '}
    </span>
    {borderCountries.map((borderCountry, index) => (
      <Link
        key={`border-country-no-${index}`}
        href={`/country/[name]`}
        as={`/country/${borderCountry}`}
      >
        <span className={styles.border_country_button}>{borderCountry}</span>
      </Link>
    ))}
  </p>
);

BorderCountries.propTypes = {
  borderCountries: PropTypes.array,
};

BorderCountries.defaultProps = {
  borderCountries: [],
};

export default BorderCountries;
