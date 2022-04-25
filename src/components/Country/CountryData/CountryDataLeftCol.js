import PropTypes from 'prop-types';
import styles from './CountryData.module.scss';

const CountryDataLeftCol = ({
  countryData: {
    name: { nativeName },
    region,
    subregion,
    capital,
  },
}) => (
  <div className='left-column'>
    <p className={styles.data_field}>
      <span className={styles.data_field_heading}>Native Name: </span>
      {Object.values(nativeName)[0].official}
    </p>
    <p className={styles.data_field}>
      <span className={styles.data_field_heading}>Region: </span>
      {region}
    </p>
    <p className={styles.data_field}>
      <span className={styles.data_field_heading}>Sub-Region: </span>
      {subregion}
    </p>
    <p className={styles.data_field}>
      <span className={styles.data_field_heading}>Capital: </span>
      {capital?.map((capitalName, i, arr) => (
        <span key={capitalName}>
          {capitalName}
          {i !== arr.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
  </div>
);

CountryDataLeftCol.propTypes = {
  countryData: PropTypes.shape({
    nativeName: PropTypes.object,
    region: PropTypes.string,
    subregion: PropTypes.string,
    capital: PropTypes.array,
  }).isRequired,
};

export default CountryDataLeftCol;
