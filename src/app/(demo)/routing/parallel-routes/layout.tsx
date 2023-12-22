interface IParalleRoutesLayoutProps {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}
const ParalleRoutesLayout: React.FC<IParalleRoutesLayoutProps> = (props) => {
  const { children, team, analytics } = props;
  return (
    <div className='parallel-routes-layout'>
      {children}
      {team}
      {analytics}
    </div>
  );
};

export default ParalleRoutesLayout;
