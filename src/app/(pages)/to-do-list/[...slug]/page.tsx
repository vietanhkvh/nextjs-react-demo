import React from 'react';
interface IToDoItemProps {
  params: { slug: string[] };
}

const ToDoItem: React.FC<IToDoItemProps> = (props) => {
  const {
    params: { slug },
  } = props;
  return <div>ToDoItem {slug}</div>;
};

export default ToDoItem;
