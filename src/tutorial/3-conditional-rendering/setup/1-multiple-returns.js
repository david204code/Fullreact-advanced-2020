import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  // functions needs a return otherwise it's an undefined error
  // these are state value
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  // useEffect to control the condition
  useEffect(() => {
    fetch(url)
    // set up a contingency for 404 response error
      .then((response) => {
        if(response.status >= 200 && response.status <= 299) {
          return response.json()
        }
        else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(response.statusText);
        }
      })
      .then((user) => {
        const {login} = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch(error => console.log(error)); 
  },
  // empty array to prevent infinite loop
  [])

  if(isLoading) {
    return (
      <div>
        <h1>Loading...Thank you Lord!</h1>
      </div>
    );
  }
  if(isError) {
    return (
      <div>
        <h1>Be patience in affliction.</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
