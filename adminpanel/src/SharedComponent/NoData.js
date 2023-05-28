import React from "react";
import "../SharedComponetStyle/noData.css";
export default function NoData() {
  return (
    <div className="no-data-holder">
      <div className="no-data-image"></div>
      <div className="no-data-text">No Data Found!..</div>
    </div>
  );
}
