import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (currentUser, component) => {
  return (
    <Route
      render={(props) => {
        if (currentUser) {
          return component;
        } else {
          return <Redirect to={"/signin"} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
