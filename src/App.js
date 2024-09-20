import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import InventorySummary from './components/InventorySummary';
import { getProducts } from './services/productService';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener Bootstrap instalado

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  const addProductHandler = (newProduct) => setProducts([...products, newProduct]);
  const updateProductHandler = (updatedProduct) => setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  const deleteProductHandler = (deletedProduct) => setProducts(products.filter(p => p.id !== deletedProduct.id));

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Gestión de Productos</h1>
      
      <div className="mb-4">
        <AddProduct onAdd={addProductHandler} />
      </div>
      
      {selectedProduct && (
        <div className="mb-4">
          <UpdateProduct product={selectedProduct} onUpdate={updateProductHandler} />
        </div>
      )}
      
      <h2 className="mb-3">Lista de Productos</h2>
      <ProductList products={products} onSelect={setSelectedProduct} onDelete={deleteProductHandler} />
      
      <h2 className="mt-4">Resumen del Inventario</h2>
      <InventorySummary products={products} />
    </div>
  );
}

export default App;

