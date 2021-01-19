import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer function
const reducer = (state, action) => {

};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  
  const [name, setName] = useState('');
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);

  // useReducer exmaple ....state is the value, dispatch is the function
  const [state, dispatch] = useReducer(reducer, defaultState);   

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if(name) {
  //     setShowModal(true);
  //     setPeople([...people, {id: new Date().getTime().toString(), name }]);
  //     setName('');
  //   }
  //   else {
  //     setShowModal(true);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {

    } else {

    }
  };

  return <>
    {/* {showModal && <Modal />}
    <form onSubmit ={handleSubmit} className ="form">
      <div className ="">
        <input type ="text" value ={name} onChange ={(e) => setName(e.target.value)}/>
      </div>
      <button type ="submit">Add</button>
    </form>
    {people.map((person) => {
      return <div key ={person.id}>
        <h4>{person.name}</h4>
      </div>
    })} */}

    {state.isModalOpen && <Modal modalContent ={state.modalContent}/>}
    <form onSubmit ={handleSubmit} className ="form">
      <div className ="">
        <input 
          type ="text"
          value ={name}
          onChange ={(e) => setName(e.target.value)}
        />
      </div>
      <button type ="submit">Add</button>
    </form>
    {state.people.map((person) => {
      return (
        <div key ={person.id} >
          <h4>{person.name}</h4>
        </div>
      );
    })}
  </>;
};

export default Index;
