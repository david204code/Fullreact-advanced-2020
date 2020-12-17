import React from 'react';

const ErrorExample = () => {
  let title = "Lord Jesus Christ";
  const handleClick = () => {
    title = "Son of the livng GOD";
    console.log(title);
  };

  return <React.Fragment>
    <h2>{title}</h2>
    <button type ="button" className ="btn" onClick ={handleClick}>
      Change title
    </button>
  </React.Fragment>
};

export default ErrorExample;
