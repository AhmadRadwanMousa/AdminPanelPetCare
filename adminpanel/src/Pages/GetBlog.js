import React from "react";
import GetBlogInformation from "../Component/GetBlogInformation";
import CatagoryHolder from "../SharedComponent/CatagoryHolder";
import NavBar from "../SharedComponent/NavBar";
export default function GetBlog() {
  return (
    <>
      <NavBar></NavBar>
      <CatagoryHolder>
        <GetBlogInformation />
      </CatagoryHolder>
    </>
  );
}
