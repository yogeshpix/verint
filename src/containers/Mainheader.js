const Mainheader = ({ title, backgroundColor }) => {
  return (
    <div>
      <h1
        className='text-center padding-1 text-color-white '
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default Mainheader;
