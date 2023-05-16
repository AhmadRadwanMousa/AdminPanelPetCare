import React from "react";
import { useAuth } from "./useAuth";
import { Navigate } from "react-router-dom";
export default function RouteGuard(props) {
  return useAuth() ? props.children : <Navigate to="/Login" />;
}
