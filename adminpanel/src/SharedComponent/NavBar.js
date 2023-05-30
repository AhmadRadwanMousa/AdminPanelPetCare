import React from "react";
import "../SharedComponetStyle/NavBar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="NavBar-Holder">
      <ul className="Catagory">
        <div>Hello {}</div>
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
            <Link to={"/AddType"}>
              <a>Add Animal</a>
            </Link>
            <Link to={"/AddBlog"}>
              <a>Add InformationBlog</a>
            </Link>
            <Link to={"/GetBlog"}>
              <a>Get InformationBlogs</a>
            </Link>
          </div>
        </li>
        <li className="dropdown">
          <Link to={"/Orders"}>
            <a>Orders</a>
          </Link>
        </li>
        <Link to={"/Login"}>
          <div>Log out</div>
        </Link>
      </ul>
    </div>
  );
}
