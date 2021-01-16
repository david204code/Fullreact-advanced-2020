import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };
  // console.log(divContainer);

  useEffect(() => {
    console.log(refContainer.current);
    divContainer.current.focus();
  });

  return(
    <>
      <form className ="form" onSubmit ={handleSubmit}>
        <div className ="">
          <input type ="text" ref ={refContainer}/>
          <button type ="submit">Submit</button>
        </div>
      </form>
      <div ref ={divContainer}>Hello David</div>
    </>
  ); 
};

export default UseRefBasics;
