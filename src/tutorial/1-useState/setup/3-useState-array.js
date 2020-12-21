import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    // console.log(newPeople)
    setPeople(newPeople)
  } 
  return <>
  {
    people.map((person) => {
      // destructure
      const {id, name} = person
      return <div key ={id} className ="item">
        <h4>{name}</h4>
        {/* empty arror function stops it running on render */}
        <button onClick ={() => removeItem(id)}>Remove</button>
      </div>;
    })
  }
  {/* set up an empty arror function to stop is rendering on page load */}
  <button className ="btn" onClick={() => setPeople([])}>
    clear items
  </button>
  </>;
};

export default UseStateArray;
