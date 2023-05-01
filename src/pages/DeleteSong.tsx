import { Link } from "react-router-dom";
import { Navbar } from "../components/partials/Hero/Navbar";
import { MusicTable } from "../components/partials/DeleteSong/MusicTable";
import { useGetSongs } from "../hooks/useGetSongs";

export const DeleteSong = (): JSX.Element => {
  const {songs, isLoading} = useGetSongs()

  return (
    <>
      <Navbar />
      <form>
        <div className="container max-w-4xl mx-auto pt-20 pb-20 px-6">
          <div className="flex mb-6 w-full justify-end">
            <Link
              to="/profile"
              className="
              px-4 py-2 
              tracking-wide 
              text-white 
              transition-colors 
              duration-200 
              transform 
              bg-red-700 
              rounded-md 
              hover:bg-red-600 
              focus:outline-none 
              focus:bg-red-600"
            >
              {"< "}Back
            </Link>
          </div>
          <div className="text-gray-900 text-xl"> Delete Song </div>
          <div className="bg-blue-700 w-full h-1"></div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <MusicTable songs={songs} />
          )}        
        </div>
    </form>
    </>
  );
};
