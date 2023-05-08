import ReactJkMusicPlayer from "react-jinke-music-player";
import { ButtonLink } from "../../global/ButtonLink";
import { useGetSongs } from "../../../hooks/useGetSongs";
import "react-jinke-music-player/assets/index.css";

type Song = {
  title: string;
  artist: string;
  cover: string;
  song: string;
}

type AudioList = {
  name: string;
  singer: string;
  cover: string;
  musicSrc: string;
}

export const ProfileSongSection = (): JSX.Element => {
  const { songs } = useGetSongs();

  const audioLists: AudioList[] = songs.map((song: Song) => {
    return {
      name: song.title,
      singer: song.artist,
      cover: 'http://localhost:8000/' + song.cover,
      musicSrc: 'http://localhost:8000/' + song.song
    }
  })

  return (
    <div className="mx-auto max-w-4xl py-4">
      <div className="font-bold text-gray-100">
        <div className="text-gray-900 text-xl"> Songs </div>
        <div className="bg-blue-700 w-full h-1"></div>
        <div className="w-full float-right mt-4">
          <ButtonLink BtnLinkText="DeleteSong" link="/delete-song" />
          <ButtonLink BtnLinkText="Add Song" link="/add-song" />
        </div>
        <ReactJkMusicPlayer
          quietUpdate
          responsive={false}
          audioLists={audioLists}
          showMediaSession
          autoPlay={false}
          mode="full"
        />
      </div>
    </div>
  );
};
