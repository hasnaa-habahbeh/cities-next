import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './CountryCard.module.scss';

const CountryCard = ({
  country: {
    name: { common },
    flags: { png },
    population,
    region,
    capital,
  },
}) => (
  <Link href='/country/[name]' as={`country/${common}`}>
    <div className={styles.country_card}>
      <img
        className={styles.country_card_flag}
        src={png}
        alt={`${common}'s flag`}
      />
      <h3 className={styles.country_card_country_name}>{common}</h3>
      <p className={styles.country_card_field}>
        <span className={styles.country_card_field_heading}>Population: </span>
        {population.toLocaleString('en-US')}
      </p>
      <p className={styles.country_card_field}>
        <span className={styles.country_card_field_heading}>Region: </span>
        {region}
      </p>
      <p className={styles.country_card_field}>
        <span className={styles.country_card_field_heading}>Capital: </span>
        {capital && capital[0]}
      </p>
    </div>
  </Link>
);

CountryCard.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.object,
    flags: PropTypes.object,
    population: PropTypes.number,
    region: PropTypes.string,
    capital: PropTypes.array,
  }).isRequired,
};

export default CountryCard;
