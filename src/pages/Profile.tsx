import { ButtonLink } from "../components/global/ButtonLink";
import { Navbar } from "../components/partials/Hero/Navbar";
import { ProfileInfoSection } from "../components/partials/Profile/ProfileInfoSection";
import { ProfileAboutSection } from "../components/partials/Profile/ProfileAboutSection";
import { ProfileSongSection } from "../components/partials/Profile/ProfileSongSection";
import { useUser } from "../hooks/useUserContext";

export const Profile = (): JSX.Element => {

  const { firstName, profileImage, lastName, city, state, songs, description } = useUser();


  return (
    <>
      <Navbar />
      <div className="container max-w-4xl mx-auto flex mt-10">
        <div className="w-1/3">
          <img
            v-if="userStore"
            className="lg:w-full h-64 rounded-lg shadow-lg"
            alt="Profile Pic"
            src={ profileImage }
          />
        </div>
        <div className="w-full pl-4">
          <div className="flex">
            <div className="w-1/2">
              <h1 className="text-2xl md:text-4xl text-left text-gray-900 capitalize">
                { firstName + ' ' + lastName }
              </h1>
              <span className="text-md text-gray-700 mt-2">
                <i>
                  <b>{ city + ', ' + state}</b>
                </i>
              </span>
            </div>
            <div className="ml-32 float-right w-1/2 max-w-[200px] font-bold">
              <ButtonLink BtnLinkText="Edit Profile" link="/edit-profile" />
            </div>
          </div>
          <ProfileAboutSection 
            description={ description }
          />
          <ProfileInfoSection songs={ songs }/>
        </div>
      </div>
      <ProfileSongSection />
    </>
  );
};
