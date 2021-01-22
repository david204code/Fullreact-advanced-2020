import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ image, name, price }) => {
  // if image exit then get the url
  const url = image && image.url;
  return <article className='product'>
    <img src ={url || defaultImage} alt ={name || 'default'} />
    <h4>{name}</h4>
    {/* if the price is not there */}
    <p>${price || 3.99}</p>
  </article>;
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// default props
Product.defaultProps = {
  name: 'default name',
  price: 3.99,
  image: defaultImage,
}

export default Product;
