import React, { useState } from "react";
import "../ComponentStyle/AddProductForm.css";
export default function AddProductsForm() {
  const [ProductInfo, setProductInfo] = useState([
    {
      AnimalType: "",
      ProductName: "",
      ProductPrice: "",
      ProductType: "",
      Images: "",
    },
  ]);
  const handleAnimalType = (event) => {
    setProductInfo({ ...ProductInfo, AnimalType: event.target.value });
  };
  const handleProductName = (event) => {
    setProductInfo({ ...ProductInfo, ProductName: event.target.value });
  };
  const handleProductType = (event) => {
    setProductInfo({ ...ProductInfo, ProductType: event.target.value });
  };
  const handleProductPrice = (event) => {
    setProductInfo({ ...ProductInfo, ProductPrice: event.target.value });
  };
  const handleImage = (event) => {};
  const handleAddPostSumbit = (event) => {
    event.preventDefault();
    console.log(ProductInfo);
  };
  return (
    <>
      <div className="add-product-section">
        <div className="Add-post-Header">Add Product Page</div>
        <form className="product-form" onSubmit={handleAddPostSumbit}>
          <input
            className="data-input"
            placeholder="AnimalType"
            onChange={handleAnimalType}
          />
          <input
            className="data-input"
            placeholder="ProductName"
            onChange={handleProductName}
          />
          <input
            className="data-input"
            placeholder="ProductType"
            onChange={handleProductType}
          />
          <input
            className="data-input"
            placeholder="ProductPrice"
            onChange={handleProductPrice}
          />
          <input
            className="data-input"
            placeholder="Image-upload"
            onChange={handleImage}
            id="I2"
          />
          <button type="submit" className="add-product-btn">
            Add Product
          </button>
        </form>
        <div className="product-images">
          <div className="image">
            ImagePath
            <div className="remove-image"></div>
          </div>
          <div className="image">
            ImagePath
            <div className="remove-image"></div>
          </div>
        </div>
      </div>
    </>
  );
}
