'use client';
interface ITemplateProps {
  children: React.ReactNode;
}

const Template: React.FC<ITemplateProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Template;
