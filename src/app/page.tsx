import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import Link from 'next/link';
import styles from './page.module.scss';
import { ROUTE_REDIRECT_TO_PAGE, ROUTE_TO_DO_LIST } from '@routes/pathes';

interface IAppContainerProps {}
const AppContainer: React.FC<IAppContainerProps> = (props) => {
  return (
    <div className={styles.container}>
      <Link href={ROUTE_REDIRECT_TO_PAGE}>Tranferrer</Link>
      <Link href={ROUTE_TO_DO_LIST}>To-do list</Link>
    </div>
  );
};
export default AppContainer;
