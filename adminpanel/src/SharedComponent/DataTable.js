import React, { useState } from "react";
import "../SharedComponetStyle/DataTable.css";
import NoData from "./NoData";
import { json, useLocation } from "react-router-dom";
import api from "../api/api";
export default function DataTable(props) {
  const bodyData = props.bodyData;
  const headerContent = props.headerContent;
  const location = useLocation();
  const [Content, setContent] = useState(bodyData);
  const handleDelete = (index) => {
    Content.splice(index, 1);
    props.handleDeleteClick(index);
    const newContent = [...Content];
    setContent(newContent);
  };
  const handleOrderState = async (e, OrderId) => {
    const response = await api.put("/admin/setOrderState", {
      OrderState: e.target.value,
      OrderID: OrderId,
    });
    const json = await response.data;
    console.log(json);
  };
  return (
    <div className="table-holder">
      {Content.length < 1 ? (
        <NoData />
      ) : (
        <table>
          <thead>
            <tr className="table-header">
              {headerContent.map((ele) => (
                <th className="header-data" key={ele}>
                  {ele}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Content.map((data, index) => (
              <tr className="body-row" key={data._id}>
                {location.pathname === "/GetBlog" ? (
                  <>
                    <td className="body-data">{data._id}</td>
                    <td className="body-data">{data.animalType}</td>
                    <td className="body-data">{data.animalBreed}</td>
                    <td className="body-data" id="r1">
                      <div className="remove-logo-div-holder">
                        <div
                          className="remove-logo-image"
                          onClick={() => {
                            handleDelete(index);
                          }}></div>
                      </div>
                    </td>
                  </>
                ) : location.pathname === "/Orders" ? (
                  <>
                    <td className="body-data">{data._id}</td>
                    <td className="body-data">{data.Order.orderState}</td>
                    <td className="body-data">
                      <select
                        onChange={(event) => handleOrderState(event, data._id)}
                        className="select-order-state">
                        <option disabled selected>
                          Choose Order State
                        </option>
                        <option>Pending</option>
                        <option>Order Placed</option>
                        <option>Order has been shipped</option>
                      </select>
                    </td>
                    <td className="body-data">{data.Order.totalPrice}$</td>
                  </>
                ) : (
                  <>
                    <td className="body-data">{data.animalType}</td>
                    <td className="body-data">{data.productType}</td>
                    <td className="body-data">{data.productName}</td>
                    <td className="body-data">{data.productPrice}$</td>
                    <td className="body-data">
                      <div className="remove-logo-div-holder">
                        <div
                          className="remove-logo-image"
                          onClick={() => {
                            handleDelete(index);
                          }}></div>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
