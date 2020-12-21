import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name: 'peter', age: 24, message: 'A cheerful heat is good medince'});
  // console.log(person);

  const changeMessage = () => {
    // spread operator which leaves the other attribute of the OBJECT as there are
    setPerson({...person, message: "That's the message to you"});
  };

  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className ="btn" onClick ={changeMessage}>
        Change message
      </button>
    </React.Fragment>
  )
};

export default UseStateObject;
