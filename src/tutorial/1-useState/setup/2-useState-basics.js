import React, { useState } from 'react';
// useState is a function coming from react (named import so name must be exact)

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  // useState(DEFAULT VALUE) pass invoke pass in default value
  const [text, setText] = useState('random title')

  const handleClick = () => {
    if (text === 'random title') {
      setText('Jesus Christ Son of the Living God!');
    } else {
      setText('random title');
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className ="btn" onClick ={handleClick}>
        Click
      </button>
    </React.Fragment>
  )
};

export default UseStateBasics;
