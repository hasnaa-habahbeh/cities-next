import PropTypes from 'prop-types';
import styles from './CountryData.module.scss';

const CountryDataRightCol = ({
  countryData: { population, tld, currencies, languages },
}) => (
  <div className='right-column'>
    <p className={styles.data_field}>
      <span className={styles.data_field_heading}>Population: </span>
      {population.toLocaleString('en-US')}
    </p>
    <p className={styles.data_field}>
      <span className={styles.data_field_heading}>Top Level Domain: </span>
      {tld[0]}
    </p>
    <p className={styles.data_field}>
      <span className={styles.data_field_heading}>Currencies: </span>
      {Object.keys(currencies)?.map((currency, index, arr) => (
        <span key={`currency-no-${index}`}>
          {currency}
          {index !== arr.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
    <p className={styles.data_field}>
      <span className={styles.data_field_heading}>Languages: </span>
      {Object.keys(languages)?.map((language, index, arr) => (
        <span key={`language-no-${index}`}>
          {language.toLocaleUpperCase()}
          {index !== arr.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
  </div>
);

CountryDataRightCol.propTypes = {
  countryData: PropTypes.shape({
    population: PropTypes.number,
    tld: PropTypes.array,
    currencies: PropTypes.object,
    languages: PropTypes.object,
  }).isRequired,
};

export default CountryDataRightCol;
