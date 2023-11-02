import React from 'react';
import Product from '../Product';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductList;
