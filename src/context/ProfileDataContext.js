import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";

const ProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);

// Context to get profile of current user
export const ProfileDataProvider = ({ children }) => {
  const currentUser = useCurrentUser();
  const [isAuth, setIsAuth] = useState(false);
  const [profileData, setProfileData] = useState();
  const url = useParams();

  //Async function to make api call to get profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axiosReq(`/profiles/${currentUser?.profile_id}`);
        setProfileData(data);
        setIsAuth(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, [currentUser, url]);

  console.log(isAuth);
  return (
    <ProfileDataContext.Provider value={{ profileData, isAuth, setIsAuth }}>
      {children}
    </ProfileDataContext.Provider>
  );
};
