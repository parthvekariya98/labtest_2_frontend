import React, { useState } from 'react';
import ProductTable from './components/ProductTable';
import AddProductForm from './components/AddProductForm';

const App = () => {
  const [products, setProducts] = useState([{ productId: 1, productName: 'Product 1', productCategory: 'Category 1', supplier: 'Supplier 1', price: 100, }, { productId: 2, productName: 'Product 2', productCategory: 'Category 2', supplier: 'Supplier 2', price: 200, }, { productId: 3, productName: 'Product 3', productCategory: 'Category 3', supplier: 'Supplier 3', price: 300, },]);

  const handleAddProduct = (product) => {
    const newProduct = { ...product, productId: products.length + 1 };
    setProducts([...products, newProduct]);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Product List</h1>
      <AddProductForm onSubmit={handleAddProduct} />
      <ProductTable products={products} />
    </div>
  );
};

export default App;

