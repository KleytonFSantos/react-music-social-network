type Props = {
    BtnText:string
}

export const ButtonForm = ({ BtnText }: Props): JSX.Element => {
  return (
    <button
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
        focus:bg-blue-600">
      { BtnText }
    </button>
  );
};
