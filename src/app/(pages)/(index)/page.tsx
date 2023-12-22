import styles from './page.module.scss';

interface IAppContainerProps {}
const AppContainer: React.FC<IAppContainerProps> = (props) => {
  return <div className={styles.pageIndexContainer}>Home</div>;
};
export default AppContainer;
