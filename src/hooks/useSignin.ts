import axios from "axios";
import { useState } from "react";
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
  const signin = async ({ email, password }: SigninProps) => {

    setIsLoading(true);
    setError(null);

    await axios
      .post(`${baseUrl}/login_check`, {
        username: email,
        password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("user", response.data.email);
        localStorage.setItem("token", response.data.token);
        dispatch({ type: "LOGIN", payload: response.data.user.email });
        setIsLoading(false);
        window.location.href = "/profile";
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.data?.message);
      });
  };

  return { signin, isLoading, error };
};
