import { ChangeEvent } from "react";

type Props = {
  label: string;
  error: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const TextArea = ({ label, error, onChange }: Props): JSX.Element => {
  return (
    <>
      <label className="block uppercase font-semibold tracking-wide text-gray-900 text-xs">
        {label}
      </label>
      <textarea
        className="
        mt-2
        appearance-none
        block
        w-full
        bg-white
        text-gray-700
        border border-gray-400
        rounded
        py-3
        px-4
        leading-tight
        focus:outline-none focus:bg-white focus:border-gray-500
        "
        onChange={onChange}
        placeholder="placeholder"
        rows={10}
        cols={30}
      ></textarea>
      <span v-if="error" className="text-red-500">
        {error}
      </span>
    </>
  );
};
