import React, { useState } from 'react';

// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  // state value
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

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
            <input 
              type ="text" 
              id ="firstName" 
              name ="firstName" 
              value ={firstName}
               // access the event object like with event.preventDefault
              onChange ={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className ="form-control">
            <label htmlFor ="email"></label>
            <input 
              type ="text" 
              id ="email" 
              name ="email" 
              value ={email} 
              onChange ={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* can also be inline onClick function, same concept */}
          {/* <button type ="submit" onClick ={handleSubmit}>Add Person</button> */}
          <button type ="submit" onClick ={handleSubmit}>Add Person</button>
        </form>
      </article>
    </>
  ); 
};

export default ControlledInputs;
