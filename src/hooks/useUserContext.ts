import axios from "axios";
import { ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";

type UserProps = {
  user_id: number;
  email: string;
  lastName: string;
  profile_image: string;
  description: string;
  city: string;
  state: string;
  songs: string;
};

export const UseUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw Error(
      "UseUserContext must be called inside a EditProfileContextProvider"
    );
  }

  return context;
};

const baseUrl: string = import.meta.env.VITE_APP_API_URL;

export const useUser = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<ReactNode>(null);
  const [firstName, setFirstName] = useState<ReactNode>(null);
  const [lastName, setLastName] = useState<ReactNode>(null);
  const [profileImage, setProfileImage] = useState<ReactNode>(null);
  const [city, setCity] = useState<ReactNode>(null);
  const [state, setState] = useState<ReactNode>(null);
  const [description, setDescription] = useState<ReactNode>(null);
  const [songs, setSongs] = useState<ReactNode>(null);
  const { dispatch }: any = UseUserContext();

  const getUser = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .get(`${baseUrl}/get-user`, config)
      .then((response) => {
        setEmail(response.data.email);
        setFirstName(response.data.first_name);
        setLastName(response.data.last_name);
        setProfileImage(response.data.profile_image);
        setCity(response.data.city);
        setState(response.data.state);
        setSongs(response.data.songs);
        setDescription(response.data.description);
        dispatch({ type: "GET_USER", payload: response.data });
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.message);
      });
  }, []);

  useEffect(() => {
    (async () => {
      await getUser();
    })();
  }, []);

  return {
    getUser,
    email,
    firstName,
    lastName,
    profileImage,
    city,
    state,
    description,
    songs,
    isLoading,
    error,
  };
};
