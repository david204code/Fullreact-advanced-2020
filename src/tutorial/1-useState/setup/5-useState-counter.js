import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  
  const reset = () => {
    setValue(0)
  }

  const complexIncrease = () => {
    // setTimeout needs to pass in two things callback function and value 
    setTimeout(() => {
      // grabing the out value once NOT the current value so one click at a time
      // setValue(value + 1);
      
      // get the current value
      setValue((prevState) => {
        return prevState + 1;
      })
    }, 2000)
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

    <section style ={{margin: '4rem 0'}}>
      <h2>More Complex counter</h2>
      <h1>{value}</h1>
      <button className ="btn" onClick ={complexIncrease}>
        Increase Later
      </button>
    </section>
  </>
};

export default UseStateCounter;
