type Props = {
  label: string;
  image: string;
};

export const SelectedImage = ({ label, image }: Props): JSX.Element => {
  return (
    <>
      <div className="mb-4">
        <label className="block uppercase tracking-wide text-xs mb-2 text-gray-900">
          {label}
        </label>
        <img
          className="rounded w-full border-solid border-4 border-blue-500"
          src={image}
          alt=""
        />
      </div>
    </>
  );
};
