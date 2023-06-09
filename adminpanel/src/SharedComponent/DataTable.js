import React, { useState } from "react";
import "../SharedComponetStyle/DataTable.css";
import NoData from "./NoData";
export default function DataTable(props) {
  const bodyData = props.bodyData;
  const headerContent = props.headerContent;
  const [Content, setContent] = useState(bodyData);
  const handleDelete = (index) => {
    Content.splice(index, 1);
    props.handleDeleteClick(index);
    const newContent = [...Content];
    setContent(newContent);
    console.log(Content.length);
  };

  return (
    <div className="table-holder">
      {Content.length < 1 ? (
        <NoData />
      ) : (
        <table>
          <>
            <thead>
              <tr className="table-header">
                {headerContent.map((ele) => (
                  <th className="header-data">{ele}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Content.map((data, index) => (
                <tr className="body-row">
                  {headerContent.length === 4 ? (
                    <>
                      {
                        <>
                          <td className="body-data">{data._id}</td>
                          <td className="body-data">{data.animalType}</td>
                          <td className="body-data">{data.animalBreed}</td>
                          <td className="body-data" id="r1">
                            <div
                              className="remove-logo-image"
                              onClick={() => {
                                handleDelete(index);
                              }}
                            ></div>
                          </td>
                        </>
                      }
                    </>
                  ): headerContent.length===5?
                   (
                    <>
                      <td className="body-data">{data.animalType}</td>
                      <td className="body-data">{data.productType}</td>
                      <td className="body-data">{data.productName}</td>
                      <td className="body-data">{data.productPrice}$</td>
                      <td className="body-data">
                        <div
                          className="remove-logo-image"
                          onClick={() => {
                            handleDelete(index);
                          }}
                        ></div>
                      </td>

                    </>
                   ):
                   <>
                   {/* <td className="body-data">{data._id}</td>
                   <td className="body-data">{data.email}</td>
                   <td className="body-data">{data.} </td>
                   <td className="body-data">{data._d}</td>
                   <td className="body-data">{data._d}</td>
                   <td className="body-data">{data._d}</td> */}
                   </>
                   }
                </tr>
              ))}
            </tbody>
          </>
        </table>
      )}
    </div>
  );
}
