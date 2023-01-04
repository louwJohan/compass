import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

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
  }, [currentUser, profileData]);

  return (
    <ProfileDataContext.Provider value={{ profileData, isAuth }}>
      {children}
    </ProfileDataContext.Provider>
  );
};
