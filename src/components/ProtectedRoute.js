import React, { useState, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useProfileData } from "../context/ProfileDataContext";
import Asset from "./Asset";

// Protected rout component to redirect users that is not logged in
const ProtectedRoute = ({ children }) => {
  const userLogin = useProfileData();
  const [hasLoaded, setHasLoaded] = useState();
  const history = useHistory();

  /*
   Function to delay loading of page to wait for async function
   to set users and set profile
   */
  useLayoutEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      {hasLoaded ? (
        <>{userLogin.isAuth ? children : history.push("/signin")}</>
      ) : (
        <Asset spinner />
      )}
    </>
  );
};

export default ProtectedRoute;
