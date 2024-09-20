import React, { useState } from 'react';
import { addProduct } from '../services/productService';

const AddProduct = ({ onAdd }) => {
  const [product, setProduct] = useState({ nombre: '', precio: 0, cantidad: 0 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = await addProduct(product);
    onAdd(newProduct);
    // Reiniciar el formulario
    setProduct({ nombre: '', precio: 0, cantidad: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          className="form-control"
          placeholder="Nombre"
          value={product.nombre}
          onChange={(e) => setProduct({ ...product, nombre: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="precio">Precio</label>
        <input
          type="number"
          id="precio"
          className="form-control"
          placeholder="Precio"
          value={product.precio}
          onChange={(e) => setProduct({ ...product, precio: parseFloat(e.target.value) })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="cantidad">Cantidad</label>
        <input
          type="number"
          id="cantidad"
          className="form-control"
          placeholder="Cantidad"
          value={product.cantidad}
          onChange={(e) => setProduct({ ...product, cantidad: parseInt(e.target.value) })}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Agregar Producto</button>
    </form>
  );
};

export default AddProduct;
