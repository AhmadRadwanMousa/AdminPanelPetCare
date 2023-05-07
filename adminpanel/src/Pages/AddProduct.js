import React from "react";
import CatagoryHolder from "../SharedComponent/CatagoryHolder";
import AddProductForm from "../Component/AddProductsForm";
import NavBar from "../SharedComponent/NavBar";
export default function AddProduct() {
  return (
    <>
      <NavBar />
      <CatagoryHolder>
        <AddProductForm />
      </CatagoryHolder>
    </>
  );
}
