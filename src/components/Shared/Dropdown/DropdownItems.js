import PropTypes from 'prop-types';
import styles from './DropdownItems.module.scss';

const DropdownItems = ({ regions, setSelect }) => (
  <div className={styles.dropdown_list}>
    {regions.map((region) => (
      <p
        className={styles.dropdown_list_item}
        key={region}
        onClick={() => setSelect(region)}
      >
        {region}
      </p>
    ))}
  </div>
);

DropdownItems.propTypes = {
  regions: PropTypes.array,
  setSelect: PropTypes.func,
};

DropdownItems.defaultProps = {
  regions: [],
  setSelect: null,
};

export default DropdownItems;
