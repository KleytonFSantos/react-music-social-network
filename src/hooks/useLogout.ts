import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";



const baseUrl: string = import.meta.env.VITE_APP_API_URL;

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch }: any = useAuthContext();
  
  const navigate = useNavigate()

  const logout = async () => {
    setIsLoading(true);
    setError(null);
    const token = localStorage.getItem('token');
    console.log(token);  
    const config = {
        headers:{
          Authorization: `Bearer ${token}`,
        }
      };
      console.log(`Bearer ${token}`)
    await axios
      .get(`${baseUrl}/logout`, config)
      .then((response) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
        dispatch({ type: "LOGOUT", payload: null });
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setError(err.response.data.message);
      });
  };

  return { logout, isLoading, error };
};
