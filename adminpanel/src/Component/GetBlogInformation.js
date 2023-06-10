import React, { useState } from "react";
import "../ComponentStyle/GetBlogInformaiton.css";
import { useEffect } from "react";
import NoData from "../SharedComponent/NoData";
import DataTable from "../SharedComponent/DataTable";
import api from "../api/api";
export default function GetBlogInformation() {
  const [blogdata, setblogdata] = useState([]);
  const [index, setIndex] = useState();
  const headerContent = ["BlogID", "AnimalType", "AnimalBreed", "remove"];
  useEffect(() => {
    GetBlogs();
  }, [index]);
  const handleDeleteClick = async (index) => {
    setIndex(index);
    const blogId = blogdata[index]._id;
    const response = await api.delete("/admin/deleteBlogRecord", {
      data: { BlogId: blogId },
    });
    const json = await response.data;
  };
  const GetBlogs = async () => {
    const response = await api.get("/admin/getBlogRecords", {});
    const json = await response.data;
    setblogdata(json);
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
