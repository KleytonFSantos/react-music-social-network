import { useState } from "react";
import { ButtonForm } from "../components/global/ButtonForm";
import { SelectedImage } from "../components/global/SelectedImage";
import { InputForm } from "../components/global/InputForm";
import { TextArea } from "../components/global/TextArea";
import { Navbar } from "../components/partials/Hero/Navbar";
import { FileInput } from "../components/global/FileInput";
import { useEditProfile } from "../hooks/useEditProfile";
import { LoadingComponent } from "../components/global/LoadingComponent";

export const EditProfile = (): JSX.Element => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [description, setDescription] = useState("");

  const { editProfile, error, isLoading } = useEditProfile();

  const handleEditProfile = async () => {
    editProfile({
      firstName,
      lastName,
      city,
      state,
      description,
      profileImage,
    });
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setProfileImage(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleEditProfile}>
        <div className="container max-w-4xl mx-auto pt-20 pb-20 px-6">
          <div className="text-gray-900 text-xl"> Edit Profile </div>
          <div className="bg-blue-700 w-full h-1"></div>

          <div className="flex flex-wrap mt-4 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <InputForm
                htmlFor="First Name"
                label="First Name"
                type="text"
                error={error ?? ""}
                onChange={(e) => setFirstName(e.currentTarget.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <InputForm
                htmlFor="Last Name"
                label="Last Name"
                type="text"
                error={error ?? ""}
                onChange={(e) => setLastName(e.currentTarget.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-4 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <InputForm
                htmlFor="City"
                label="City"
                type="text"
                error={error ?? ""}
                onChange={(e) => setCity(e.currentTarget.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <InputForm
                error={error ?? ""}
                htmlFor="State"
                label="State"
                type="text"
                onChange={(e) => setState(e.currentTarget.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-4 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <FileInput
                label="Profile Image"
                handleInputChange={onSelectFile}
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-4 mb-6">
            <div className="w-full md:w-1/2 px-3">
              {profileImage && (
                <SelectedImage label="Selected Image" image={profileImage} />
              )}
            </div>
          </div>
          <div className="flex flex-wrap mt-4 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <TextArea
                label="Description"
                error={error ?? ""}
                onChange={(e) => setDescription(e.currentTarget.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-8 mb-6">
            <div className="w-full px-3">
              <div className="w-36 float-right mt-8">
                <ButtonForm BtnText="Edit Profile" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
