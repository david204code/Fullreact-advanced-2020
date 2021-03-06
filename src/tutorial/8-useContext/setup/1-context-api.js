import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// two components - Provider, Consumer

// root components
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
    {/* can use useContext to access the value */}
      <PersonContext.Provider value ={{removePerson, people}}>
        <h3>Context API / useContext hook</h3>
        <List />
      </PersonContext.Provider>
    </>
  );
};

const List = () => {
    // access the value in the root component using useContext hook
    const mainData = useContext(PersonContext);
    console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  // access the value in the root component using useContext hook
  const { removePerson } = useContext(PersonContext);
  // console.log(data);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
