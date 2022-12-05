import { ReactNode } from "react";

type Props = {
  description: ReactNode
}

export const ProfileAboutSection = ({ description }: Props): JSX.Element => {
  return (
    <div
      className="py-2 sm:w-2/3
          "
    >
      <p className="text-gray-900 text-lg">
        <b>About me</b>
      </p>
      <p className="text-md md:text-lg text-gray-600 leading-normal">
        { description }
      </p>
    </div>
  );
};
