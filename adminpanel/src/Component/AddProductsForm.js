import React, { useState } from "react";
import "../ComponentStyle/AddProductForm.css";
import { FileUploader } from "react-drag-drop-files";
export default function AddProductsForm() {
  const [image, setImage] = useState([]);
  const [imageName, setImageName] = useState([]);
  const [ProductInfo, setProductInfo] = useState([
    {
      AnimalType: "",
      ProductName: "",
      ProductPrice: "",
      ProductType: "",
      Images: [],
    },
  ]);
  const handleProductSubmit = async (event) => {
    await UploadData();
  };
  const UploadData = async () => {
    const response = await fetch("http://localhost:4111/admin/getProductData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ProductData: ProductInfo }),
    });
    console.log(ProductInfo);
    const data = await response.json();
    console.log(data.message);
  };
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
  const handleChange = (image) => {
    const Images = [...image];

    const convertedImages = [];

    for (let i = 0; i < Images.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(Images[i]);
      reader.onload = () => {
        convertedImages.push(reader.result);
        if (convertedImages.length === Images.length) {
          setImage(convertedImages);
          setProductInfo({ ...ProductInfo, Images: convertedImages });
          setImageName(Images);
        }
      };
    }
  };

  const handleImageRemove = (index) => {
    const Images = [...image];
    Images.splice(index, 1);
    setImage(Images);
    setProductInfo({ ...ProductInfo, Images: Images });
    const name = [...imageName];
    name.splice(index, 1);
    setImageName(name);
  };
  return (
    <>
      <div className="add-product-section">
        <div className="Add-post-Header">Add Product Page</div>
        <form className="product-form" onSubmit={handleProductSubmit}>
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
          <FileUploader
            classes="image-uploader"
            placeholder="Image-upload"
            handleChange={handleChange}
            multiple
            children={
              <div className="image-content-holder">
                <div className="image-label">Please Upload an Image ..</div>
                <div className="image-logo"></div>
              </div>
            }
          />
          <button type="submit" className="add-product-btn">
            Add Product
          </button>
        </form>

        <div className="product-images">
          {imageName.map((ele, index) => (
            <div className="image" key={index}>
              <div className="image-src-name"> {ele.name}</div>

              <div
                className="remove-image"
                onClick={() => handleImageRemove(index)}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
