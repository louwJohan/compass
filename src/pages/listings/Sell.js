import React, { useLayoutEffect, useState } from "react";
import ListingCreateForm from "./ListingCreateForm";
import { useCurrentUser } from "../../context/CurrentUserContext.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Asset from "../../components/Asset";

const Sell = () => {
  const currentUser = useCurrentUser();
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();
  useLayoutEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 1000);
  }, []);
  return (
    <div>
      {hasLoaded ? (
        <>{currentUser ? <ListingCreateForm /> : history.push("/signin")}</>
      ) : (
        <Asset spinner />
      )}
    </div>
  );
};

export default Sell;
