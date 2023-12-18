import Link from 'next/link';
import {
  ROUTE_DEMO_ROUTING,
  ROUTE_INDEX,
  ROUTE_REDIRECT_TO_PAGE,
  ROUTE_TO_DO_LIST,
} from '@routes/pathes';
import Header from '@component/header';
import styles from './template.module.scss';
interface ITemplateProps {
  children: React.ReactNode;
}

const Template: React.FC<ITemplateProps> = ({ children }) => {
  return (
    <div className={styles.templateContainer}>
      <Header>
        <Link href={ROUTE_INDEX}>Home</Link>
        <Link href={ROUTE_REDIRECT_TO_PAGE}>Redirect</Link>
        <Link href={ROUTE_TO_DO_LIST}>To-do list</Link>
        <Link href={ROUTE_DEMO_ROUTING}>Routing demo</Link>
      </Header>
      {children}
    </div>
  );
};

export default Template;
