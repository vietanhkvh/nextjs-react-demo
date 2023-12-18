import Header from '@component/header';
import styles from './template.module.scss';
interface ITemplateProps {
  children: React.ReactNode;
}

const Template: React.FC<ITemplateProps> = ({ children }) => {
  return (
    <div className={styles.templateContainer}>
      <Header />
      {children}
    </div>
  );
};

export default Template;
