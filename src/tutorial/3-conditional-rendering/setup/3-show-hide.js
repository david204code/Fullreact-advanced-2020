import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return <>
    <button className ="btn" onClick ={() => setShow(!show)}>
      show/hide
    </button>
    {/* disply the Item component if show === true */}
    {show && <Item />}
  </>;
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  
  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    // clean up function
    return () => {
      window.removeEventListener('resize', checkSize);
    }
  }, [])

  return <>
    <div style ={{marginTop: '2rem'}}>
      <h1>window</h1>
      <h2>Size: {size}px</h2>
    </div>
  </>
}

export default ShowHide;
