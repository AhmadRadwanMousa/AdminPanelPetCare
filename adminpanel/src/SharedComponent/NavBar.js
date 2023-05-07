import React from "react";
import "../SharedComponetStyle/NavBar.css";
export default function AddCatagory() {
  return (
    <div className="NavBar-Holder">
      <ul className="Catagory">
        <li className="dropdown">
          <a>Products</a>
          <div class="dropdown-content">
            <a>Link 1</a>
            <a>Link 2</a>
            <a>Link 3</a>
          </div>
        </li>
        <li class="dropdown">
          <a class="dropbtn">InformationBlogs</a>
          <div class="dropdown-content">
            <a>Link 1</a>
            <a>Link 2</a>
            <a>Link 3</a>
          </div>
        </li>
      </ul>
    </div>
  );
}
