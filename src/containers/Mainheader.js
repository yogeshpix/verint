const Mainheader = ({ title, backgroundColor }) => {
  return (
    <div>
      <h1
        style={{
          backgroundColor: backgroundColor,
          textAlign: 'center',
          padding: '1rem',
          color: 'var(--white-color)',
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default Mainheader;
