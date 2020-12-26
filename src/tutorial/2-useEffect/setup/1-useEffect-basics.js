import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
// useeffects = work outside the component
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  // useEffect works with a call back function
  useEffect(() => {
    // this will render SECOND 
    console.log('call useEffect');
    if(value >= 1) {
      document.title = `Blessings(${value})`
    }
  })
  // This will render FIRST
  console.log('render component');
  return <>
    <h1>{value}</h1>
    <button className ="btn" onClick ={() => setValue(value + 1)}>
      Click button
    </button>
  </>;
};

export default UseEffectBasics;
