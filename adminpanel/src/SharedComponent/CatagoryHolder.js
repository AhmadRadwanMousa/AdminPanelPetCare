import React from "react";
import "../SharedComponetStyle/CatagoryHolder.css";
export default function CatagoryHolder(props) {
  return <div className="content-holder">{props.children}</div>;
}
