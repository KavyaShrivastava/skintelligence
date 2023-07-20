import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  return (
    isAuthenticated ? <Profile/>:<Navigate to = '/'/>
    
  );
};

export default PrivateRoute;
