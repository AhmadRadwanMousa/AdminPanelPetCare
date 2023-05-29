import React from "react";
import AddAnimalTypeForm from "../Component/AddAnimalTypeForm";
import CatagoryHolder from "../SharedComponent/CatagoryHolder";
import NavBar from "../SharedComponent/NavBar";

export default function AddType() {
  return (
    <>
      <NavBar />
      <CatagoryHolder>
        <AddAnimalTypeForm />
      </CatagoryHolder>
    </>
  );
}
