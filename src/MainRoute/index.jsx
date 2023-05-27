import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthProvider";
import { Navigate, Outlet } from "react-router";

function ProtectedRoute() {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? <Outlet /> : <Navigate to="/Login"></Navigate>;
}

export default ProtectedRoute;
