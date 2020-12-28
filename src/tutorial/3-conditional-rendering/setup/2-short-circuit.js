import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
 
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      
      {/* if text is empty the string after || is rendered */}
      <h1>{text || 'Lord Jesus'}</h1>
      <button className ="btn" onClick ={() => setIsError(!isError)}>toggle error</button>
      {/* if text is true than the string is return */}
      {/* {text && <h1>Blessing</h1>} */}
      {isError && <h1>faith...</h1>}
      {/* ternary operator if True <p>is rendered*/}
      {isError ? (
        <p>error ternary operator</p>
      ) : ( 
      // default if it is not true
        <div><h2>There is no error</h2></div>
      )}
    </>
  );
};

export default ShortCircuit;
