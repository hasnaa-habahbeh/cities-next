import { useSelector } from 'react-redux';
import CountryCard from './CountryCard';
import styles from './CountriesContainer.module.scss';

const CountriesContainer = () => {
  const countriesList = useSelector(
    (state) => state.countriesList.displayedCountries
  );

  return (
    <div className={`${styles.countries_list} space-from-edges`}>
      <div className={styles.countries_list_container}>
        {countriesList?.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountriesContainer;
