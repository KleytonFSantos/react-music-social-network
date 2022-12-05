import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

type SigninProps = {
  email: string;
  password: string;
};

const baseUrl: string = import.meta.env.VITE_APP_API_URL;

export const useSignin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch }: any = useAuthContext();

  const navigate = useNavigate()
  
  const signin = async ({ email, password }: SigninProps) => {
    setIsLoading(true);
    setError(null);

    await axios
      .post(`${baseUrl}/login`, {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("user", response.data.user.email);
        localStorage.setItem("token", response.data.token);
        navigate('/profile')

        dispatch({ type: "LOGIN", payload: response.data.user.email });
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.message);
      });
  };

  return { signin, isLoading, error };
};
