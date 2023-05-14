import React, { useState, useEffect } from "react";
import "../ComponentStyle/AddInfromationBlog.css";
export default function AddInformationBlog() {
  const [image, setImage] = useState([]);
  const [ImageName, setImageName] = useState([]);
  const [blogdata, setblogdata] = useState([
    {
      AnimalType: " ",
      AnimalBreed: " ",
      Longitude: "",
      Latitude: "",
      Description: " ",
      Images: [],
    },
  ]);

  const HandleAddBlogForm = async (e) => {
    e.preventDefault();
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

  const handleImageChange = (e) => {
    const Images = Array.from(e.target.files);
    const convertedImages = [];

    for (let i = 0; i < Images.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(Images[i]);
      reader.onload = () => {
        convertedImages.push(reader.result);
        if (convertedImages.length === Images.length) {
          setImage(convertedImages);
          setblogdata({ ...blogdata, Images: convertedImages });
          setImageName(Images);
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
        <input
          className="info-input"
          placeholder="AnimalType"
          onChange={handleAnimalType}
        />
        <input
          className="info-input"
          placeholder="AnimalBreed"
          onChange={handleAnimalBreed}
        />
        <input
          className="info-input"
          placeholder="Longitude"
          onChange={handleLongitude}
        />
        <input
          className="info-input"
          placeholder="Latitude"
          onChange={handleLatitude}
        />
        <textarea
          className="info-input"
          placeholder="Description"
          id="t1"
          onChange={handleDescription}
        />

        <input
          className="Info-image"
          placeholder="Image"
          type={"file"}
          multiple
          onChange={handleImageChange}
        />

        <button className="add-blog-btn" type="submit">
          Add Blog
        </button>
      </form>

      <div className="blog-image-holder">
        {ImageName.map((img, index) => (
          <div className="selected-images" key={index}>
            <div className="image-src-name"> {img.name}</div>
            <div
              className="remove-blog-image"
              onClick={() => handleDeleteImage(index)}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
