import React from "react";
import GetProducts from "../Component/GetProducts";
import NavBar from "../SharedComponent/NavBar";
import CatagoryHolder from "../SharedComponent/CatagoryHolder";
export default function GetProduct() {
  return (
    <>
      <NavBar></NavBar>
      <CatagoryHolder>
        <GetProducts />
      </CatagoryHolder>
    </>
  );
}
