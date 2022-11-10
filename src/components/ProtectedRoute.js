import React from "react";
import { useHistory } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  const history = useHistory();
  if (!isAuthenticated) {
    return history.push("/signin");
  }
  return children;
};

export default ProtectedRoute;
