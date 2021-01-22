import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ image, name, price }) => {
  return <article className='product'>
    <h4>Single Product</h4>
    {/* <img src ={image.url} alt ={name} />
    <h4>{name}</h4>
    <p>${price}</p> */}
  </article>;
};

Product.propTypes = {
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
};

export default Product;
