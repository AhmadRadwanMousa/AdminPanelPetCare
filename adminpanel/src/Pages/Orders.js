import React, { useEffect, useState } from "react";
import DataTable from "../SharedComponent/DataTable";
import NavBar from "../SharedComponent/NavBar";
import Order from "../Component/Order";
import api from "../api/api"
export default function Orders() {
  const [Orders ,setOrders]=useState ([]);
  const [isLoading,setLoading] =useState(true); 
  const getOrders = async ()=>{
const response =await api.get ("/admin/getOrders",{});
const json = await response.data ;
setLoading(false);
console.log (json);
setOrders (json.Orders);

  }
  useEffect (()=>{
    getOrders();
  },[])
  return (
    <>
      <NavBar />
      {isLoading?(<div>Loading</div>):
      <Order userOrders = {Orders}/>}

    </>
  );
}
