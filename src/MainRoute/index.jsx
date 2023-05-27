import React, { useContext } from "react";
import { AuthContext } from "../context/Auth";
import { Navigate, Outlet } from "react-router";

function MainRoute() {
 
  const { isAuth } = useContext(AuthContext);

  return isAuth ? <Outlet /> : <Navigate to="/Login"></Navigate>;
}

export default MainRoute;
