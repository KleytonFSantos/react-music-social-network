import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditProfileContext } from "../contexts/EditProfileContext";

type EditProfileProps = {
  firstName: string;
  lastName: string;
  profileImage: string;
  description: string;
  city: string;
  state: string;
};

export const useEditProfileContext = () => {
  const context = useContext(EditProfileContext);

  if (!context) {
    throw Error(
      "useEditProfileContext must be called inside a EditProfileContextProvider"
    );
  }

  return context;
};

const baseUrl: string = import.meta.env.VITE_APP_API_URL;

export const useEditProfile = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch }: any = useEditProfileContext();

  const navigate = useNavigate();

  const editProfile = async ({
    firstName,
    lastName,
    profileImage,
    description,
    city,
    state,
  }: EditProfileProps) => {
    setIsLoading(true);
    setError(null);

    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .post(
        `${baseUrl}/edit-profile`,
        {
          first_name: firstName,
          last_name: lastName,
          profile_image: profileImage,
          description,
          city,
          state,
        },
        config
      )
      .then((response) => {
        console.log(response);
        navigate("/profile");

        dispatch({ type: "EDIT_PROFILE", payload: response });
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.message);
      });
  };

  return { editProfile, isLoading, error };
};
