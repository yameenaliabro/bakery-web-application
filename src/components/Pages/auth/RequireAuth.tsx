import { Navigate, useLocation } from "react-router-dom";
import { UserLoggedin} from "./Auth";
import React from "react";
const RequireAuth = ({ children }:{children:React.ReactNode}) => {
  const location = useLocation();
  const isLoggedIn = UserLoggedin();
  if (!isLoggedIn) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return children;
};
export default RequireAuth;
