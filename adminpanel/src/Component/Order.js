import React from "react";
import DataTable from "../SharedComponent/DataTable";

export default function Order(props) {
  const Headers = ["OrderId", "OrderState", "setOrderState", "Total Amount"];
  return (
    <>
      <DataTable headerContent={Headers} bodyData={props.userOrders} />
    </>
  );
}
