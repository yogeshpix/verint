const Container = ({ children, textAlign = '' }) => {
  return <div className={`container ${textAlign}`}>{children}</div>;
};

export default Container;
