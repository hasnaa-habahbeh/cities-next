import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  filterByRegion,
  resetDisplayed,
} from '../../../store/actions/countriesList';
import { FaAngleDown } from 'react-icons/fa';
import DropdownItems from './DropdownItems';
import styles from './Dropdown.module.scss';

const regions = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const Dropdown = () => {
  const [select, setSelect] = useState('');
  const [expandDropDown, setExpandDropDown] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (select) {
      select === 'All'
        ? dispatch(resetDisplayed())
        : dispatch(filterByRegion(select));
    }
  }, [select, dispatch]);

  return (
    <div
      className={styles.dropdown}
      tabIndex={0}
      onClick={() => setExpandDropDown(!expandDropDown)}
      onBlur={() => setExpandDropDown(false)}
    >
      <div className={styles.dropdown_label}>
        <span className={styles.dropdown_label_text}>
          {select ? select : 'Filter By Region'}
        </span>
        <FaAngleDown className={styles.dropdown_label_icon} />
      </div>
      {expandDropDown && (
        <DropdownItems regions={regions} setSelect={setSelect} />
      )}
    </div>
  );
};

export default Dropdown;
