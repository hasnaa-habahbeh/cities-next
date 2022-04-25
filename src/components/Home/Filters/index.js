import SearchBox from '../../Shared/SearchBox';
import Dropdown from '../../Shared/Dropdown';
import styles from './Filters.module.scss';

const Filters = () => (
  <div className={`${styles.filtering_container} space-from-edges`}>
    <SearchBox />
    <Dropdown />
  </div>
);

export default Filters;
