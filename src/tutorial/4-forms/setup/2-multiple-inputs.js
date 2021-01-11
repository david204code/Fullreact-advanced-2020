import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object properties

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  // set up one state value for people as object 
  const [person, setPerson] = useState({firstName: '', email: '', age: ''})
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);

    // spread operator to copy the old values
    setPerson({...person, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange ={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange ={handleChange}
            />
          </div>
          <div className ="form-control">
            <label htmlFor ="age">Age : </label>
            <input
              type ="text"
              id ="age"
              name ="age"
              value ={person.age}
              onChange ={handleChange}
            />
          </div>
          <button type='submit' onClick ={handleSubmit}>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
