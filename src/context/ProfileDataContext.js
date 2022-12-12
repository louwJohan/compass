import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";

const ProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
  const currentUser = useCurrentUser();
  const [profileDataNew, setProfileData] = useState();
  const url = useParams();
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
  }, [currentUser, url]);
  return (
    <ProfileDataContext.Provider value={{ profileDataNew }}>
      {children}
    </ProfileDataContext.Provider>
  );
};
