import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "./useUserContext";


const baseUrl: string = import.meta.env.VITE_APP_API_URL;

export const useGetSongs = () => {
  const user = useUser();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [songs, setSongs] = useState([]);
  const getSongs = async (user: Number) => {
    setIsLoading(true);
    setError(null);
    const token = localStorage.getItem('token');
    const config = {
        headers:{
          Authorization: `Bearer ${token}`,
        }
      };
    await axios
      .get(`${baseUrl}/${user}/songs`, config)
      .then((response) => {
        console.log(response.data);
        setSongs(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);

        setError(err.response.data.message);
      });
  };

  useEffect(() => {
    if (user.userId) {
      (async () => {
        await getSongs(user.userId as Number);
      })();
    }
  }, [user.userId]);

  return { getSongs, songs, isLoading, error };
};
