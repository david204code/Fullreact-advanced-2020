import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  // functions needs a return otherwise it's an undefined error

  const [loading, setLoading] = useState(true);

  if(loading) {
    return <h2>Thank you Lord!</h2>;
  }
  return <h2>Praise the Lord!</h2>;
};

export default MultipleReturns;
