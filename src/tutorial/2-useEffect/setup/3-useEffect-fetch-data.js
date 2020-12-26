import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

// second argument

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  

  const getUser = async() => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  }

  // set up useEffect AND cannot use async, needs to be inside or seperately outside
  useEffect(() => {
    // fetch request
    getUser();
    // add second argument dependency array list to prevent infinite loop
  }, []);

  return (
    <>
      <h3>Github Users</h3>
      <ul className ="users">
        {users.map((user)=> {
          // destructing
          const {id, login, avatar_url, html_url} = user
          return <li key ={id}>
            <img src ={avatar_url} alt ={login}/>
            <div>
              <h4>{login}</h4>
              <a href ={html_url}>Profile</a>
            </div>
          </li>
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
