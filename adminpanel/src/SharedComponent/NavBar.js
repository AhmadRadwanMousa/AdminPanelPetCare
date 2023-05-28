import React from "react";
import "../SharedComponetStyle/NavBar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="NavBar-Holder">
      <ul className="Catagory">
        <li className="dropdown">
          <a>Products</a>
          <div class="dropdown-content">
            <Link to={"/AddProduct"}>
              <a>Add Product</a>
            </Link>
            <Link to={"/GetProduct"}>
              <a>Get Products</a>
            </Link>
          </div>
        </li>
        <li class="dropdown">
          <a class="dropbtn">InformationBlogs</a>
          <div class="dropdown-content">
            <Link to={"/AddBlog"}>
              <a>Add InformationBlog</a>
            </Link>
            <Link to={"/GetBlog"}>
              <a>Get InformationBlogs</a>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
