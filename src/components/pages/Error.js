import React from "react";

const Error = () => {
  const back = (e) => {
    e.preventDefault();
    window.history.back();
  };
  return (
    <div>
      <h1>404</h1> <h3>The page you were looking for couldn’t be found...</h3>
      <p onClick={back}>Back to Previous Page</p>
    </div>
  );
};

export default Error;
