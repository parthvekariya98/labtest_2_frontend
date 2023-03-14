import React, { useState } from 'react';
import './addproduct.css';

const AddProductForm = ({ onSubmit }) => {
  const [product, setProduct] = useState({
    productId: '',
    productName: '',
    productCategory: '',
    supplier: '',
    price: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(product);
    setProduct({
      productId: '',
      productName: '',
      productCategory: '',
      supplier: '',
      price: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="productName">
          Product Name :
        </label>
        <input
          id="productName"
          type="text"
          name="productName"
          value={product.productName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="productCategory">
          Product Category : 
        </label>
        <input
          id="productCategory"
          type="text"
          name="productCategory"
          value={product.productCategory}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="supplier">
          Supplier :
        </label>
        <input
          id="supplier"
          type="text"
          name="supplier"
          value={product.supplier}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="price">
          Price : 
        </label>
        <input
          id="price"
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">
          ADD PRODUCT
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;