import { ButtonForm } from "../components/global/ButtonForm"
import { InputForm } from "../components/global/InputForm"

export const ForgetPassword = () : JSX.Element => {
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
                Retrieve Password
            </h1>
            <form className="mt-6">
              <InputForm htmlFor="email" type="email" label="Email" />
              <div className="mt-6">
                <ButtonForm BtnText="Send" />
              </div>
            </form>
          </div>
        </div>
    )
}