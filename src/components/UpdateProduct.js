import React, { useState } from 'react';
import { updateProduct } from '../services/productService';

const UpdateProduct = ({ product, onUpdate }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = await updateProduct(updatedProduct);
    onUpdate(updated);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={updatedProduct.nombre} onChange={(e) => setUpdatedProduct({ ...updatedProduct, nombre: e.target.value })} />
      <input type="number" value={updatedProduct.precio} onChange={(e) => setUpdatedProduct({ ...updatedProduct, precio: parseFloat(e.target.value) })} />
      <button type="submit">Actualizar Producto</button>
    </form>
  );
};

export default UpdateProduct;
