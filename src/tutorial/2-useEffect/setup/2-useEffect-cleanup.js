import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  
  // checkSize function
  const checkSize = () => {
    setSize(window.innerWidth)
  }

  // event listener with useEffect()
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  });
  
  return (
    <>
      <h1>window</h1>
      <h2>{size} px</h2>;
    </>
  )
};

export default UseEffectCleanup;
