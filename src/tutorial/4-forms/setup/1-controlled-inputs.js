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
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    // prevent page from reloading on submit
    e.preventDefault();
    // set up a condition to only add to the array if the values are true
    if(firstName && email) {
      // create a new object if both values are true
      // Before ES6
      // const person = { firstName: firstName, email: email };
      // ES6!
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      setPeople((people) => {
        return(
          [...people, person]
        );
      });
      // reset form after submit
      setFirstName('');
      setEmail('');
    }
    else {
      console.log( 'Praise the Lord');
    }
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
        {
          people.map((person, index) => {
            // destruture
            const { id, firstName, email } = person;
            return(
              <div className ="item" key ={id}>
                <h4>{firstName}</h4>
                <p>{email}</p>
                <p>{id}</p>
              </div>
            )
          })
        }
      </article>
    </>
  ); 
};

export default ControlledInputs;
