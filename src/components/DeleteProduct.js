import React from 'react';
import { deleteProduct } from '../services/productService';

const DeleteProduct = ({ product, onDelete }) => {
  const handleDelete = async () => {
    await deleteProduct(product.id);
    onDelete(product);
  };

  return (
    <button onClick={handleDelete}>Eliminar Producto</button>
  );
};

export default DeleteProduct;
