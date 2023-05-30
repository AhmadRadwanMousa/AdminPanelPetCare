import React, { useState } from "react";
import "../ComponentStyle/GetBlogInformaiton.css";
import { useEffect } from "react";
import NoData from "../SharedComponent/NoData";
import DataTable from "../SharedComponent/DataTable";

export default function GetBlogInformation() {
  const [blogdata, setblogdata] = useState([]);
  const [index, setIndex] = useState();
  const headerContent = ["BlogID", "AnimalType", "AnimalBreed", "remove"];

  useEffect(() => {
    GetBlogs();
  }, [index]);
  const handleDeleteClick = (index) => {
    setIndex(index);
    const ID = blogdata[index]._id;
    DeleteBlogs(ID);
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
    <>
      {blogdata.length === 0 ? (
        <NoData />
      ) : (
        <DataTable
          headerContent={headerContent}
          bodyData={blogdata}
          handleDeleteClick={handleDeleteClick}
        />
      )}
    </>
  );
}
