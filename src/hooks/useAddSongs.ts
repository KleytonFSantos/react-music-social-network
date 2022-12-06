import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type addSongsProps = {
  title: string;
  artist: string;
  coverImage: string;
  songFile: File | undefined;
};

const baseUrl: string = import.meta.env.VITE_APP_API_URL;

export const useAddSong = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const addSong = async ({
    title,
    artist,
    coverImage,
    songFile,
  }: addSongsProps) => {
    setIsLoading(true);
    setError(null);

    const token = localStorage.getItem("token");

    const config = {
      headers: {
          Authorization: `Bearer ${token}`,
          ContentType: "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
      },
    };

    const payload = new FormData() as any;
    payload.append('title', title)
    payload.append('artist', artist)
    payload.append('coverImage', coverImage)
    payload.append('song', songFile)
    console.log('songFile', songFile)
    await axios
      .post(
        `${baseUrl}/add-song`,
        payload,
        config
      )
      .then((response) => {
        console.log(response);
        navigate("/profile");

        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log('erroAddSong', err);
        setError(err.response.data.message)
      });
  };

  return { addSong, isLoading, error };
};
