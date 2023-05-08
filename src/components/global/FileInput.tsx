import { ChangeEvent } from "react";

type Props = {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

export const FileInput = ({ handleInputChange, label }: Props): JSX.Element => {
  return (
    <>
      <label
        className="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
              "
      >
        { label }
      </label>
      <div className="mb-3 w-full">
        <input
          className="
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
          onChange={handleInputChange}
          id="image"
          type="file"
        />
      </div>
    </>
  );
};
