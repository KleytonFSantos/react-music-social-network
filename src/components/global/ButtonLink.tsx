import { Link } from "react-router-dom";

type Props = {
    BtnLinkText:string;
    link: string;
}

export const ButtonLink = ({ BtnLinkText, link }: Props): JSX.Element => {
  return (
    <Link
      to={ link }
      className="
        ml-2
        float-right
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
        focus:bg-blue-600">
      { BtnLinkText }
    </Link>
  );
};
