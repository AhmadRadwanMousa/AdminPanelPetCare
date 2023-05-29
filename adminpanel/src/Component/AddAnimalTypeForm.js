import React, { useState } from "react";
import "../ComponentStyle/AddAnimalTypeForm.css";
import { FileUploader } from "react-drag-drop-files";
export default function AddAnimalTypeForm() {
  const [animalTypeData, setAnimalTypeData] = useState({
    animalType: "",
    Image: [],
  });
  const handleAnimalTypeApi = async () => {
    const response = await fetch("http://localhost:4111/admin/getAnimalType", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        animalTypeInformaion: animalTypeData,
      }),
    });
    const json = await response.json();
    console.log(json.message);
  };
  const [Imagerfc, setImagerfc] = useState("");
  const handleDeleteImage = () => {
    setImagerfc("");
    setAnimalTypeData({ animalTypeData, Image: null });
  };
  const handleChange = (image) => {
    let convertedImages = [];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      convertedImages[0] = reader.result;
      setAnimalTypeData({ ...animalTypeData, Image: convertedImages });
      setImagerfc(image.name);
    };
  };
  const handleTypeName = (e) => {
    setAnimalTypeData({ animalTypeData, animalType: e.target.value });
  };
  return (
    <div className="animal-type-form-holder">
      <form className="animal-type-form">
        <input
          className="animal-type-name"
          type={"text"}
          placeholder={"AnimalType"}
          onChange={handleTypeName}
        ></input>
        <FileUploader
          classes="image-uploader"
          placeholder="Image-upload"
          handleChange={handleChange}
          children={
            <div className="image-content-holder">
              <div className="image-label">Please Upload an Image ..</div>
              <div className="image-logo"></div>
            </div>
          }
        />
        <button
          className="add-type-btn"
          type="submit"
          onClick={handleAnimalTypeApi}
        >
          Add Type
        </button>
      </form>

      <div className="animal-type-image-rfc-holder">
        {Imagerfc === "" ? (
          <div style={{ fontSize: "25px", textAlign: "center" }}>
            No data Found!{" "}
          </div>
        ) : (
          <div className="animal-type-image-rfc-container">
            <div className="image-rfc-label">{Imagerfc}</div>
            <div
              className="image-rfc-delete-logo"
              onClick={handleDeleteImage}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}
