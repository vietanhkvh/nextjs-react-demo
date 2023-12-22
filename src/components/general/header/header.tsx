import styles from './header.module.scss';
interface IHeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = (props) => {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
};

export default Header;
