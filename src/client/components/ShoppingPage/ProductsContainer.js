import React, { useContext } from 'react';
import { ShoppingContext } from './ShoppingPage';

const productsList = require('../../products');

const Product = ({ product }) => {
  const { addItem } = useContext(ShoppingContext);

  return (
    <div className="product">
      <div>{product.name}</div>
      <button onClick={() => addItem(product)}>Add</button>
    </div>
  )
};

const ProductsContainer = () => {
  return (
    <div className="productsContainer">
      {productsList.map(product =>
        <Product product={product} />
      )}
    </div>
  )
};

export default ProductsContainer;