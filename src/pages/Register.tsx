import { useState } from "react";
import { ButtonForm } from "../components/global/ButtonForm";
import { FooterLinkForm } from "../components/global/FooterLinkForm";
import { InputForm } from "../components/global/InputForm";
import { LoadingComponent } from "../components/global/LoadingComponent";
import { useSignup } from "../hooks/useSignup";

export const Register = (): JSX.Element => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signup, error, isLoading } = useSignup();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signup({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    })
  }

  if (isLoading) {
    return (
      <LoadingComponent />
    );
  }

  return (
    <div
      style={{ backgroundImage: "url(login-bg.jpg)" }}
      className="
    relative 
    flex 
    bg-cover 
    flex-col 
    justify-center 
    min-h-screen 
    overflow-hidden"
    >
      <div
        className="
        w-full 
        p-6 
        m-auto 
        bg-white 
        rounded-md 
        shadow-md 
        lg:max-w-xl 
        backdrop-filter 
        backdrop-blur-sm 
        bg-opacity-10"
      >
        <h1 className="text-3xl font-semibold text-center text-zinc-700">
          Register
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <InputForm 
            htmlFor="firstName" 
            type="text" 
            label="First Name" 
            onChange={(e: React.FormEvent<HTMLInputElement>) => setFirstName(e.currentTarget.value)}
          />
          <InputForm 
            htmlFor="lastName" 
            type="text" 
            label="Last Name" 
            onChange={(e: React.FormEvent<HTMLInputElement>) => setLastName(e.currentTarget.value)}
          />
          <InputForm 
            htmlFor="email" 
            type="email" 
            label="Email" 
            onChange={(e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
          />
          <InputForm 
            htmlFor="password" 
            type="password" 
            label="Password" 
            onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
          />
          <InputForm 
            htmlFor="text" 
            type="password" 
            label="Confirm Password"
            onChange={(e: React.FormEvent<HTMLInputElement>) => setConfirmPassword(e.currentTarget.value)}
          />
          <div className="mt-6">
            <ButtonForm BtnText="Register" />
          </div>
          {error && <div className="text-red-500">{error}</div>}
        </form>

        <FooterLinkForm
          link="/login"
          text="Already have a account?"
          linkText="Login"
        />
      </div>
    </div>
  );
};
