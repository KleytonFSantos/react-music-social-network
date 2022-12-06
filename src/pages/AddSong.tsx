import { ChangeEvent, useState } from "react";
import { ButtonForm } from "../components/global/ButtonForm";
import { SelectedImage } from "../components/global/SelectedImage";
import { InputForm } from "../components/global/InputForm";
import { Navbar } from "../components/partials/Hero/Navbar";
import { FileInput } from "../components/global/FileInput";
import { LoadingComponent } from "../components/global/LoadingComponent";
import { useUser } from "../hooks/useUserContext";
import { Link } from "react-router-dom";
import { useAddSong } from "../hooks/useAddSongs";

export const AddSong = (): JSX.Element => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [songFile, setSongFile] = useState<File>();
  const user = useUser();
  const { addSong, isLoading, error } = useAddSong();

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setCoverImage(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const getUploadedSong = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSongFile(e.target?.files[0]);
    }
  };

  const handleAddSong = async () => {

        await addSong({
            artist,
            coverImage,
            title,
            songFile
        });
  } 

  if (isLoading) {
    return <LoadingComponent />;
  }

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
          <div className="text-gray-900 text-xl"> Edit Profile </div>
          <div className="bg-blue-700 w-full h-1"></div>

          <div className="flex flex-wrap mt-4 mb-6">
            <div className="w-full px-3">
              <InputForm
                placeholder={user.firstName}
                htmlFor="Song Name"
                label="Song Name"
                type="text"
                error={error ?? ""}
                onChange={(e) => setTitle(e.currentTarget.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-4 mb-6">
            <div className="w-full px-3">
              <InputForm
                placeholder={user.lastName}
                htmlFor="Singer Name"
                label="Singer Name"
                type="text"
                error={error ?? ""}
                onChange={(e) => setArtist(e.currentTarget.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-4 mb-6">
            <div className="w-full px-3">
              <FileInput label="Cover Image" handleInputChange={onSelectFile} />
            </div>
          </div>
          {coverImage && (
            <div className="flex flex-wrap mt-4 mb-6">
              <div className="w-64 h-64 px-3">
                <SelectedImage label="Selected Image" image={coverImage} />
              </div>
            </div>
          )}
          <div className="flex flex-wrap mt-4 mb-6">
            <div className="w-full px-3">
              <FileInput
                handleInputChange={getUploadedSong}
                label="Add Music"
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-8 mb-6">
            <div className="w-full px-3">
              <div className="w-36 float-right mt-8">
                <ButtonForm
                 type="button"
                 onClick={handleAddSong}
                 BtnText="Edit Profile" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
