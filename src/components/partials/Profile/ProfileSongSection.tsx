import ReactJkMusicPlayer from "react-jinke-music-player";
import { ButtonLink } from "../../global/ButtonLink";
import "react-jinke-music-player/assets/index.css";

const audioLists = [
  {
    name: "Riot Van",
    singer: "Arctic Monkeys",
    cover: "login-bg.jpg",
    musicSrc: "Arctic_Monkeys_Riot_Van.mp3",
  },
  {
    name: "I Wanna Be Yours",
    singer: "Arctic Monkeys",
    cover: "login-bg.jpg",
    musicSrc: "AUD-20220801-WA0085.mp3",
  },
];

export const ProfileSongSection = (): JSX.Element => {
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
