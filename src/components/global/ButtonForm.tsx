import { MouseEventHandler } from "react";

type Props = {
  BtnText: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export const ButtonForm = ({ BtnText, type, onClick }: Props): JSX.Element => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="
        w-full 
        px-4 py-2 
        tracking-wide 
        text-white 
        transition-colors 
        duration-200 
        transform 
        bg-blue-700 
        rounded-md 
        hover:bg-blue-600 
        focus:outline-none 
        focus:bg-blue-600"
    >
      {BtnText}
    </button>
  );
};
