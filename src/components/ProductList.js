import React, { useState, useEffect } from 'react';

const ProductList = ({ products, onSelect, onDelete }) => {
  const [sortedProducts, setSortedProducts] = useState(products);

  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  const sortByName = () => {
    const sorted = [...sortedProducts].sort((a, b) => a.nombre.localeCompare(b.nombre));
    setSortedProducts(sorted);
  };

  const sortByPrice = () => {
    const sorted = [...sortedProducts].sort((a, b) => a.precio - b.precio);
    setSortedProducts(sorted);
  };

  return (
    <div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={sortByName}>Ordenar por Nombre</button>
        <button className="btn btn-primary ml-2" onClick={sortByPrice}>Ordenar por Precio</button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map(product => (
            <tr key={product.id}>
              <td>{product.nombre}</td>
              <td>{product.precio}</td>
              <td>{product.cantidad}</td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => onSelect(product)}>Editar</button>
                <button className="btn btn-danger btn-sm ml-2" onClick={() => onDelete(product)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
