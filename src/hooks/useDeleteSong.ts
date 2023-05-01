import axios from "axios";
import { useState } from "react";


const baseUrl: string = import.meta.env.VITE_APP_API_URL;

export const useDeleteSongs = () => {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const deleteSong = async (song: Number) => {
    setIsLoading(true);
    setError(null);
    const token = localStorage.getItem('token');
    const config = {
        headers:{
          Authorization: `Bearer ${token}`,
        }
      };
    await axios
      .delete(`${baseUrl}/song/${song}`, config)
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log('erro', err)
        setError(err.response.data.message);
      });
  };

  return { deleteSong, error, isLoading };
};
