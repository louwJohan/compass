import React from "react";
import ListingCreateForm from "./ListingCreateForm";
import { useCurrentUser } from "../../context/CurrentUserContext.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Sell = () => {
  const currentUser = useCurrentUser();
  const history = useHistory();
  return <>{currentUser ? <ListingCreateForm /> : history.push("/signin")}</>;
};

export default Sell;
