import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";

const ProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
  const currentUser = useCurrentUser();
  const [profileDataNew, setProfileData] = useState();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axiosReq(`/profiles/${currentUser.profile_id}`);
        setProfileData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, [currentUser, profileDataNew]);
  return (
    <ProfileDataContext.Provider value={{ profileDataNew }}>
      {children}
    </ProfileDataContext.Provider>
  );
};
