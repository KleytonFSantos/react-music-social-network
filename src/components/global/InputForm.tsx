import { ReactNode } from "react";

type Props = {
  htmlFor: string;
  label: string;
  type: string;
  error: string;
  placeholder: any;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

export const InputForm = ({ htmlFor, label, type, error, placeholder, onChange }: Props) => {
  return (
    <div>
      <div className="mb-2">
        <label
          htmlFor={htmlFor}
          className="block text-sm text-zinc-700 font-semibold"
        >
          {label}
        </label>
        <input
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-zinc-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <span v-if="error" className="text-red-500">
        {" "}
        {error}{" "}
      </span>
    </div>
  );
};
