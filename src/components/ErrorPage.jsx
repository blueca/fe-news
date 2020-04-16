import React from 'react';

const ErrorPage = ({ status, msg }) => {
  return (
    <div>
      <p>Error!</p>
      <p>{status}</p>
      <p>{msg}</p>
    </div>
  );
};

export default ErrorPage;
