import React, { useEffect, useState } from 'react';

const InventorySummary = ({ products }) => {
  const [totalValue, setTotalValue] = useState(0);
  const [highestValueProduct, setHighestValueProduct] = useState(null);

  useEffect(() => {
    const total = products.reduce((acc, product) => acc + (product.precio * product.cantidad), 0);
    const highest = products.reduce((prev, current) => (prev.precio * prev.cantidad > current.precio * current.cantidad) ? prev : current, products[0]);
    setTotalValue(total);
    setHighestValueProduct(highest);
  }, [products]);

  return (
    <div>
      <h3>Valor total del inventario: ${totalValue}</h3>
      {highestValueProduct && <p>Producto con mayor valor: {highestValueProduct.nombre} (${highestValueProduct.precio * highestValueProduct.cantidad})</p>}
    </div>
  );
};

export default InventorySummary;
