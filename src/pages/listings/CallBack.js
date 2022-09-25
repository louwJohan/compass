import React from "react";
import { useCurrentUser } from "../../context/CurrentUserContext";

const CallBack = () => {
  const currentUser = useCurrentUser();
  const LoggedIn = ()
  const LoggedOut = (<p>Sign up or Log in to request a callback</p>)
  return <>{currentUser ? LoggedIn : LoggedOut}</>;
};

export default CallBack;
