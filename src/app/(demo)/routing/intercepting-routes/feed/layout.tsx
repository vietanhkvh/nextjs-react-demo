interface IFeedLayout {
  children: React.ReactNode;
  modal: React.ReactNode;
}
const FeedLayout: React.FC<IFeedLayout> = (props) => {
  const { children, modal } = props;
  return (
    <div className='feed-layout'>
      {children}
      <div className='modal-container'>{modal}</div>
    </div>
  );
};

export default FeedLayout;
