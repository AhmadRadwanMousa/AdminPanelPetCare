import React, { useState, useEffect } from "react";
import "../ComponentStyle/AddProductForm.css";
import { FileUploader } from "react-drag-drop-files";
import api from "../api/api";

export default function AddProductsForm() {
  const [image, setImage] = useState([]);
  const [imageName, setImageName] = useState([]);
  const [Type, setTypes] = useState([]);
  const [dataPresent, setDataPresent] = useState(image.length > 0);
  const [ProductInfo, setProductInfo] = useState([
    {
      AnimalType: "",
      ProductName: "",
      ProductPrice: "",
      ProductType: "",
      Images: [],
    },
  ]);
  useEffect(() => {
    setDataPresent(image.length > 0);
  }, [image]);
  const getTypes = async () => {
    const response = await api.get("/admin/getTypes", {});
    const json = await response.data;
    setTypes(json.allModelsData[0]);
  };
  useEffect(() => {
    getTypes();
  }, []);
  console.log(Type);
  const handleProductSubmit = async (event) => {
    await UploadData();
  };
  const UploadData = async () => {
    const response = await api.post("/admin/getProductData", {
      ProductData: ProductInfo,
    });
    const json = await response.data;
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
          <select
            className="data-input"
            placeholder="AnimalType"
            onChange={handleAnimalType}>
            required
            <option selected disabled>
              Select Animal Type
            </option>
            {Type.map((type) => (
              <option>{type.TypeName}</option>
            ))}
          </select>
          <select
            className="data-input"
            placeholder="ProductType"
            required
            onChange={handleProductType}>
            <option selected disabled>
              Select Product Type
            </option>
            <option>Food</option>
            <option>Accessories</option>
          </select>
          <input
            className="data-input"
            placeholder="ProductName"
            onChange={handleProductName}
            required
          />
          <input
            className="data-input"
            placeholder="ProductPrice"
            onChange={handleProductPrice}
            required
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

        <div
          className={`animate__animated ${
            dataPresent ? "animate__fadeInLeft" : "animate__fadeOutLeft"
          } product-images`}>
          {imageName.map((ele, index) => (
            <div className="image" key={index}>
              <div className="image-src-name"> {ele.name}</div>

              <div
                className="remove-image"
                onClick={() => handleImageRemove(index)}></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
