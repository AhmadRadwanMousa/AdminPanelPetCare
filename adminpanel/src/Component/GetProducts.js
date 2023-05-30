import React, { useEffect, useState } from "react";
import "../ComponentStyle/GetProducts.css";
import DataTable from "../SharedComponent/DataTable";
import NoData from "../SharedComponent/NoData";
export default function GetProducts() {
  const [Products, setProducts] = useState([]);
  const headerContent = [
    "animalType",
    "productType",
    "productName",
    "productPrice",
    "remove",
  ];
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const respone = await fetch(
      "http://localhost:4111/admin/getProductsRecords",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const Products = await respone.json();
    setProducts(Products.data);
    console.log(Products.message);
  };
  const DeleteProduct = async (id) => {
    const respone = await fetch(
      "http://localhost:4111/admin/deleteProductRecord",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: id }),
      }
    );
    const json = await respone.json();
    console.log(json.message);
  };
  const handelDeleteProduct = (index) => {
    const id = Products[index]._id;
    DeleteProduct(id);
  };
  return (
    <>
      {Products.length === 0 ? (
        <NoData />
      ) : (
        <>
          <DataTable
            headerContent={headerContent}
            bodyData={Products}
            handleDeleteClick={handelDeleteProduct}
          />
        </>
      )}
    </>
  );
}
