import React, { useState, useEffect } from 'react';
//import { getProducts } from '../services/productService';

const ProductList = ({ products, onSelect }) => {
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    setSortedProducts([...products]);
  }, [products]);

  const sortBy = (key) => {
    const sorted = [...sortedProducts].sort((a, b) => a[key] > b[key] ? 1 : -1);
    setSortedProducts(sorted);
  };

  return (
    <div>
      <h3>Esta opción le permite ver el listado de productos</h3>
      <button onClick={() => sortBy('nombre')}>Ordenar por Nombre</button>
      <button onClick={() => sortBy('precio')}>Ordenar por Precio</button>
      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id} onClick={() => onSelect(product)}>
            {product.nombre} - ${product.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
