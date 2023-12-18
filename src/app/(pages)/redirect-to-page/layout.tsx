interface IRedirectionLayoutProps {
  children: React.ReactNode;
}
const RedirectionLayout: React.FC<IRedirectionLayoutProps> = ({ children }) => {
  return <div className='redirect-to-class'>{children}</div>;
};

export default RedirectionLayout;
