import Link from 'next/link';
import {
  ROUTE_INDEX,
  ROUTE_REDIRECT_TO_PAGE,
  ROUTE_TO_DO_LIST,
} from '@routes/pathes';

import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <Link href={ROUTE_INDEX}>Home</Link>
      <Link href={ROUTE_REDIRECT_TO_PAGE}>Tranferrer</Link>
      <Link href={ROUTE_TO_DO_LIST}>To-do list</Link>
    </div>
  );
};

export default Header;
