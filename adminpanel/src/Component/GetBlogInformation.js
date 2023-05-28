import React, { useState } from "react";
import "../ComponentStyle/GetBlogInformaiton.css";
import { useEffect } from "react";
import NoData from "../SharedComponent/NoData";

export default function GetBlogInformation() {
  const [blogdata, setblogdata] = useState([]);

  useEffect(() => {
    GetBlogs();
  }, []);
  const handleDeleteClick = (index) => {
    const ID = blogdata[index]._id;
    DeleteBlogs(ID);
    const CopyData = [...blogdata];
    CopyData.splice(index, 1);
    setblogdata(CopyData);
  };
  const GetBlogs = async () => {
    const response = await fetch("http://localhost:4111/admin/getBlogRecords", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setblogdata(data);
  };
  const DeleteBlogs = async (ID) => {
    const response = await fetch(
      "http://localhost:4111/admin/deleteBlogRecord",
      {
        method: "DELETE",
        body: JSON.stringify({ id: ID }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await response.json();
    console.log(res);
  };

  return (
    <div className="blogs-table">
      <div className="blog-table-header">GetBlog Information</div>
      {blogdata.length === 0 ? (
        <NoData />
      ) : (
        <div className="blog-data-header">
          <div>AnimalType</div>
          <div>AnimalBreed</div>
          <div>Remove</div>
        </div>
      )}
      {blogdata.map((data, index) => (
        <div className="blog-data" key={index}>
          <div className="animal-type">{data.animalType}</div>
          <div className="animal-breed">{data.animalBreed}</div>
          <div
            className="delete-blog"
            onClick={() => handleDeleteClick(index)}
          ></div>
        </div>
      ))}
    </div>
  );
}
