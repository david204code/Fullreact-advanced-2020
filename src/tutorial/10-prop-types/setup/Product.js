import React from 'react';

const Product = ({ image, name, price }) => {
  return <article className='product'>
    <h4>Single Product</h4>
    {/* <img src ={image.url} alt ={name} />
    <h4>{name}</h4>
    <p>${price}</p> */}
  </article>;
};

export default Product;
