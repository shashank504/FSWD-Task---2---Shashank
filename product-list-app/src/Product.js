import React from 'react';

const Product = ({ title, description, price, imageUrl }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Product;
