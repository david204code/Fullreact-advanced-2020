import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name: 'peter', age: 24, message: 'A cheerful heart is good medince'});
  // console.log(person);

  // can set up multiple state value
  const [name, setName] = useState('peter');
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState('A cheerful heart is good medince');

  const changeMessage = () => {
    // spread operator which leaves the other attribute of the OBJECT as there are
    // setPerson({...person, message: "That's the message to you"});
    setAge(18);
  };

  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      {/* <h3>{person.age}</h3> */}
      {age}
      <h3>{person.message}</h3>
      <button className ="btn" onClick ={changeMessage}>
        Change message
      </button>
    </React.Fragment>
  )
};

export default UseStateObject;
