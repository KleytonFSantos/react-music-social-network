type Props = {
  songs: number
}

export const ProfileInfoSection = ({ songs }: Props): JSX.Element => {
  return (
    <div
      className="
        w-full
        sm:w-2/3
        font-bold
        text-gray-100
        mt-4
        rounded
        text-center
        bg-blue-700
        p-2
        py-1
        "
    >
      { songs  > 1  ? songs + " Songs" : songs + " Song" }
    </div>
  );
};
