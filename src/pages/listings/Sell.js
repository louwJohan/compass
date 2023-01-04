import React from "react";
import ListingCreateForm from "./ListingCreateForm";
import { useCurrentUser } from "../../context/CurrentUserContext.js";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

// Renders the Sell page with the listing create form
const Sell = () => {
  const currentUser = useCurrentUser();

  return (
    <>{currentUser ? <ListingCreateForm /> : <Redirect push to="/signin" />}</>
  );
};

export default Sell;
