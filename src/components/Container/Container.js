const Container = ({ children, style } = {}) => {
  return (
    <div className="px-[8%]" style={style}>
      {children}
    </div>
  );
};
export default Container;
