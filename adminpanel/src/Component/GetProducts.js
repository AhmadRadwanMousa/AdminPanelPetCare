import React, { useEffect, useState } from "react";
import "../ComponentStyle/GetProducts.css";
import NoData from "../SharedComponent/NoData";
export default function GetProducts() {
  const [Products, setProducts] = useState([]);
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
    const Copy = [...Products];
    Copy.splice(index, 1);
    setProducts(Copy);
  };
  return (
    <div className="get-products-holder">
      <div className="get-product-header">Get Products</div>
      {Products.length === 0 ? (
        <NoData />
      ) : (
        <>
          <div className="static-products-data">
            <div className="animal-type-product">Animal Type</div>
            <div className="product-type">Product Type</div>
            <div className="product-name">Product Name</div>
            <div className="product-price">Product Price</div>
            <div className="text">Remove</div>
          </div>
        </>
      )}
      {Products.map((product, index) => (
        <div className="products-data" key={index}>
          <div className="animal-type-product">{product.animalType}</div>
          <div className="product-type">{product.productType}</div>
          <div className="product-name">{product.productName}</div>
          <div className="product-price">{product.productPrice} $</div>
          <div
            className="remove-product"
            onClick={() => handelDeleteProduct(index)}
          ></div>
        </div>
      ))}
    </div>
  );
}
