import React from 'react';

const PageHeader = ({ children }) => {
  return (
    <h2
      style={{
        backgroundColor: 'var(--secondary-color)',
        color: '#fff',
        textAlign: 'center',
        padding: '0.5rem',
        margin: '1rem auto',
      }}
    >
      {children}
    </h2>
  );
};

export default PageHeader;
