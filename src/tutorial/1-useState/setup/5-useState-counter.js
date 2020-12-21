import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  
  const reset = () => {
    setValue(0)
  }

  return <>
    <section style ={{margin: '4rem 0'}}>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      {/* inline function to decrease the count*/}
      <button className ="btn" onClick ={() => setValue(value - 1)}>Decrease</button>
      {/* a reference function */}
      <button className ="btn" onClick ={reset}>Reset</button>
      {/* inline function */}
      <button className ="btn" onClick ={() => setValue(value + 1)}>Increase</button>
    </section>
  </>
};

export default UseStateCounter;
