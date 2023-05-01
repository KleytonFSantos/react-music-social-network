import { useDeleteSongs } from "../../../hooks/useDeleteSong";

type Props = {
    songs?: {
      id: number;
      title: string;
      artist: string;
      cover: string;
      duration?: string;
    }[];
  };
  

export const MusicTable = ({ songs }: Props) => {
    const baseUrl: string = import.meta.env.VITE_APP_API_URL;
    const { deleteSong } = useDeleteSongs()

    const handleDeleteSong = async (song: number) => {
      await deleteSong(song);
    }

  return (
    <div className="w-full mb-12 px-4 mt-8">
      <div
        className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
     text-zinc-800"
      >
        <div className="block w-full overflow-x-auto ">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-zinc-800">
                  Music
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-zinc-800">
                  Artist
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-zinc-800">
                  Time
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-zinc-800">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
                {songs && songs.map(song => (
                      <tr key={song.id}>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                              <img
                                  src={baseUrl + '/' + song.cover}
                                  className="h-12 w-12 bg-white rounded-full border"
                                  alt="..."
                              />
                              <span className="ml-3 font-bold text-zinc-900">
                                  {" "}
                                  {song.title}{" "}
                              </span>
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {song.artist}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {song.duration}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <button
                              onClick={() => handleDeleteSong(song.id)} 
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
                                  focus:bg-red-600">
                                      delete
                              </button>
                          </td>
                      </tr>
                    )
                  )
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}