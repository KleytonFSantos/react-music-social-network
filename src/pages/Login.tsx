import { useState } from "react";
import { ButtonForm } from "../components/global/ButtonForm";
import { FooterLinkForm } from "../components/global/FooterLinkForm";
import { InputForm } from "../components/global/InputForm";
import { LinkForm } from "../components/global/LinkForm";
import { LoadingComponent } from "../components/global/LoadingComponent";
import { TextErrorForm } from "../components/global/TextErrorForm";
import { useSignin } from "../hooks/useSignin";
import { useNavigate } from "react-router-dom";

export const Login = (): JSX.Element => {

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const { signin, isLoading, error } = useSignin()
  const navigate = useNavigate();
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signin({
      email,
      password,
    }).then(() => {
      navigate('/profile');
    })
  } 

  if(isLoading) {
    return (
      <LoadingComponent />
    )
  }

  return (
    <div 
    style={{ backgroundImage:"url(login-bg.jpg)" }}
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
          Sign in
        </h1>

        {error && <TextErrorForm error={error}/>}

        <form className="mt-6" onSubmit={handleSubmit}>
          <InputForm 
            htmlFor="email" 
            type="email" 
            label="Email" 
            error={error ?? ""}
            onChange={(e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
          />
          <InputForm 
            htmlFor="password" 
            type="password" 
            label="Password" 
            error={error ?? ""}
            onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}  
          />
          <LinkForm text="Forget Password?" link="/retrieve-password" />
          
          <div className="mt-6">
            <ButtonForm BtnText="Login" />
          </div>
        </form>

        <FooterLinkForm
          link="/register"
          text="Don't have an account?"
          linkText="Sign Up"
        />
      </div>
    </div>
  );
};
