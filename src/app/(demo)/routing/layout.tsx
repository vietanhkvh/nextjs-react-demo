import styles from './routing.module.scss';
interface IRoutingLayoutProps {
  children: React.ReactNode;
}
const RoutingLayout: React.FC<IRoutingLayoutProps> = (props) => {
  const { children } = props;
  return <div className={styles.layoutContainer}>{children}</div>;
};

export default RoutingLayout;
