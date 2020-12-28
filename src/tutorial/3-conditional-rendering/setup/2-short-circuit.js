import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
 
  const [text, setText] = useState('');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      {/* {if(){console.log('hello world')}} */}
      {/* if text is empty the string after || is rendered */}
      <h1>{text || 'Lord Jesus'}</h1>
      {/* if text is true than the string is return */}
      {text && <h1>Blessing</h1>}
    </>
  );
};

export default ShortCircuit;
