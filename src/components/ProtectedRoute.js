import React, { useState, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useProfileData } from "../context/ProfileDataContext";
import Asset from "./Asset";

const ProtectedRoute = ({ children }) => {
  const userLogin = useProfileData();
  const [hasLoaded, setHasLoaded] = useState();

  const history = useHistory();
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
