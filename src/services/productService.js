const API_URL = 'http://localhost:8080/productos';

export const getProducts = async () => {
  const response = await fetch(`${API_URL}`);
  return response.json();
};

export const addProduct = async (product) => {
  const response = await fetch(`${API_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return response.json();
};

export const updateProduct = async (product) => {
  const response = await fetch(`${API_URL}/${product.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return response.json();
};

export const deleteProduct = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  return response.json();
};
