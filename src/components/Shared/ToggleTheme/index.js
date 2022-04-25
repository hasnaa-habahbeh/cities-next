import { FaMoon } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode } from '../../../store/actions/theme';
import styles from './ToggleTheme.module.scss';

const ToggleTheme = () => {
  const currentTheme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  return (
    <div
      className={styles.toggle_theme}
      onClick={() => dispatch(toggleMode(currentTheme))}
    >
      <FaMoon className={styles.toggle_theme_icon} />
      <span className={styles.toggle_theme_text}>Dark Mode</span>
    </div>
  );
};

export default ToggleTheme;
