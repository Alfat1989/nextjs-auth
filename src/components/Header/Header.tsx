import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <nav>
        <Navigation />
      </nav>
    </div>
  );
};
