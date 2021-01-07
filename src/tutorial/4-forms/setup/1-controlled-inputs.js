import React, { useState } from 'react';

// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const handleSubmit = (e) => {
    // prevent page from reloading on submit
    e.preventDefault();
    console.log('thank you Lord Jesus')
  };

  return(
    <>
      <article>
        <form className ="form" onSubmit ={handleSubmit}>
          <div className ="form-control">
            <label htmlFor ="firstName">Name : </label>
            <input type ="text" id ="firstName" name ="firstName"/>
          </div>
          <div className ="form-control">
            <label htmlFor ="email"></label>
            <input type ="text" id ="email" name ="email"/>
          </div>
          {/* can do inline onClick function, same concept */}
          {/* <button type ="submit" onClick ={handleSubmit}>Add Person</button> */}
          <button type ="submit" onClick ={handleSubmit}>Add Person</button>
        </form>
      </article>
    </>
  ); 
};

export default ControlledInputs;
