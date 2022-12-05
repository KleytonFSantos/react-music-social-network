import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

type SignupProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const baseUrl: string = import.meta.env.VITE_APP_API_URL;

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch }: any = useAuthContext();

  const navigate = useNavigate()

  const signup = async ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  }: SignupProps) => {
    setIsLoading(true);
    setError(null);

    await axios.post(`${baseUrl}/register`, {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password_confirmation: confirmPassword,
    }).then((response) => {
      localStorage.setItem('user', response.data.user.email)
      localStorage.setItem('token', response.data.token)
      navigate('/profile')
      
      dispatch({ type: 'REGISTER', payload: response.data.user.email })
      setIsLoading(false);
    }).catch((err) => {
      setIsLoading(false);
      setError(err.response.data.message)
    });

  };

  return { signup, isLoading, error };
};
