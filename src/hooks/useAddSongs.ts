import axios from "axios";
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

type addSongsProps = {
  title: string;
  artist: string;
  coverImage?: string;
  uploadImage: string;
  songFile: File | undefined;
};

const baseUrl: string = import.meta.env.VITE_APP_API_URL;

export const useAddSong = () => {
  const [error, setError] = useState<string | ReactNode>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const addSong = async ({
    title,
    artist,
    songFile,
    uploadImage
  }: addSongsProps) => {
    setIsLoading(true);
    setError(null);

    const token = localStorage.getItem("token");

    const config = {
      headers: {
          Authorization: `Bearer ${token}`,
      },
    };

    const payload = new FormData() as any;
    payload.append('title', title)
    payload.append('artist', artist)
    payload.append('coverImage', uploadImage)
    payload.append('song', songFile)
    console.log('songFile', songFile)
    await axios
      .post(
        `${baseUrl}/add-song`,
        payload,
        config
      )
      .then((response) => {
        navigate("/profile");

        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError('Ocorreu um erro inesperado');
      });
  };

  return { addSong, isLoading, error };
};
