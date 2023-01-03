import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";

const ProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);

// Context to get profile of current user
export const ProfileDataProvider = ({ children }) => {
  const currentUser = useCurrentUser();
  const [isAuth, setIsAuth] = useState(false);
  const [profileDataNew, setProfileData] = useState();
  const url = useParams();

  //Async function to make api call to get profile data
  useEffect(() => {
    const fetchProfile = async () => {
      const id = currentUser?.profile_id;
      try {
        const { data } = await axiosReq(`/profiles/${id}`);
        setProfileData(data);
        setIsAuth(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, [currentUser, url]);
  return (
    <ProfileDataContext.Provider value={{ profileDataNew, isAuth }}>
      {children}
    </ProfileDataContext.Provider>
  );
};
