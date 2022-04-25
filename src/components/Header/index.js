import Link from 'next/link';
import ToggleTheme from '../Shared/ToggleTheme';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={`${styles.header} space-from-edges`}>
      <Link className={styles.main_heading_anchor} href='/'>
        <h1 className={styles.main_heading_text}>Where in the world?</h1>
      </Link>
      <ToggleTheme />
    </div>
  );
};

export default Header;
