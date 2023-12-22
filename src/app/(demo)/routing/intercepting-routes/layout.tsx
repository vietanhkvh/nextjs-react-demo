import React from 'react';
interface IInterceptingRoute {
  children: React.ReactNode;
  [key: string]: React.ReactNode;
}
const InterceptingRoute: React.FC<IInterceptingRoute> = (props) => {
  const { children } = props;
  return <div className='intercepting-routes-layout'>{children}</div>;
};

export default InterceptingRoute;
