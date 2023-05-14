import React from "react";
import AddInformationBlog from "../Component/AddInformationBlog";
import CatagoryHolder from "../SharedComponent/CatagoryHolder";
import NavBar from "../SharedComponent/NavBar";
export default function AddBlog() {
  return (
    <>
      <NavBar></NavBar>
      <CatagoryHolder>
        <AddInformationBlog />
      </CatagoryHolder>
    </>
  );
}
