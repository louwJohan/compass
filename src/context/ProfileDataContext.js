import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";

const ProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
  return (
    <ProfileDataContext.Provider value={{ item: 1 }}>
      {children}
    </ProfileDataContext.Provider>
  );
};
