import React, { useState, useEffect } from "react";
import "../ComponentStyle/AddInfromationBlog.css";
import api from "../api/api";
import { FileUploader } from "react-drag-drop-files";
import "animate.css";
export default function AddInformationBlog() {
  const [image, setImage] = useState([]);
  const [ImageName, setImageName] = useState([]);
  const [dataPresent, setDataPresent] = useState(image.length > 0);
  const [Types, setTypes] = useState([]);
  const [blogdata, setblogdata] = useState([
    {
      AnimalType: "",
      AnimalBreed: "",
      Longitude: "",
      Latitude: "",
      Description: "",
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
  const HandleAddBlogForm = async (e) => {
    UploadeData();
  };
  const UploadeData = async () => {
    const response = await fetch("http://localhost:4111/admin/getBlogData", {
      method: "POST",
      body: JSON.stringify({
        blogInformation: blogdata,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  const handleChange = (img) => {
    const image = [...img];
    const convertedImages = [];
    console.log(image);
    for (let i = 0; i < image.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(image[i]);
      reader.onload = () => {
        convertedImages.push(reader.result);
        if (convertedImages.length === image.length) {
          setImage(convertedImages);
          setblogdata({ ...blogdata, Images: convertedImages });
          setImageName(image);
        }
      };
    }
  };
  const handleDeleteImage = (index, event) => {
    const imgs = [...image];
    imgs.splice(index, 1);
    setImage(imgs);
    setblogdata({ ...blogdata, Images: imgs });
    const updatedImageNames = [...ImageName];
    updatedImageNames.splice(index, 1);
    setImageName(updatedImageNames);
  };
  console.log(image);
  const handleAnimalType = (e) => {
    setblogdata({ ...blogdata, AnimalType: e.target.value });
  };
  const handleAnimalBreed = (e) => {
    setblogdata({ ...blogdata, AnimalBreed: e.target.value });
  };
  const handleLongitude = (e) => {
    setblogdata({ ...blogdata, Longitude: e.target.value });
  };
  const handleLatitude = (e) => {
    setblogdata({ ...blogdata, Latitude: e.target.value });
  };
  const handleDescription = (e) => {
    setblogdata({ ...blogdata, Description: e.target.value });
  };

  return (
    <div className="information-blog-holder">
      <form className="add-blog-form" onSubmit={HandleAddBlogForm}>
        <select
          className="info-input"
          placeholder="AnimalType"
          onChange={handleAnimalType}>
          required
          <option disabled selected>
            Select Animal Type
          </option>
          {Types.map((ele) => (
            <option>{ele.TypeName}</option>
          ))}
        </select>
        <input
          className="info-input"
          placeholder="AnimalBreed"
          onChange={handleAnimalBreed}
          required
        />
        <input
          className="info-input"
          placeholder="Longitude"
          onChange={handleLongitude}
          required
        />
        <input
          className="info-input"
          placeholder="Latitude"
          onChange={handleLatitude}
          required
        />
        <textarea
          className="info-input"
          placeholder="Description"
          id="t1"
          onChange={handleDescription}
          required
        />
        <FileUploader
          classes="image-uploader"
          placeholder="Image-upload"
          handleChange={handleChange}
          multiple
          required
          children={
            <div className="image-content-holder" id="t2">
              <div className="image-label">Please Upload an Image ..</div>
              <div className="image-logo"></div>
            </div>
          }
        />

        <button className="add-blog-btn" type="submit">
          Add Blog
        </button>
      </form>
      <div
        className={`animate__animated ${
          dataPresent ? "animate__fadeInLeft" : "animate__fadeOutLeft"
        } blog-image-holder`}>
        {ImageName.map((img, index) => (
          <div className="selected-images" key={index}>
            <div className="image-src-name"> {img.name}</div>
            <div
              className="remove-blog-image"
              onClick={() => handleDeleteImage(index)}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
