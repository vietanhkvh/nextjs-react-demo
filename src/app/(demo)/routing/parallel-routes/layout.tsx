import React from 'react';
interface IParalleRoutesLayoutProps {
  children: React.ReactNode;
  [key: string]: any;
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
