import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  filterByName,
  resetDisplayed,
} from '../../../store/actions/countriesList';
import { FaSearch } from 'react-icons/fa';
import debounce from 'lodash.debounce';
import styles from './SearchBox.module.scss';

const SearchBox = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    name && dispatch(filterByName(name));
    !name && dispatch(resetDisplayed());
  }, [name, dispatch]);

  const updateQuery = (e) => {
    setName(e?.target?.value);
  };

  const debouncedOnChange = debounce(updateQuery, 800);

  return (
    <div className={styles.search_container}>
      <FaSearch className={styles.search_icon} />
      <input
        className={styles.search_input}
        type='text'
        placeholder='Search for a country'
        onChange={debouncedOnChange}
      />
    </div>
  );
};

export default SearchBox;
