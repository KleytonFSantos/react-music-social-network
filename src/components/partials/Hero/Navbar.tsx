import { useState } from "react";
import { useLogout } from "../../../hooks/useLogout";
import { LoadingComponent } from "../../global/LoadingComponent";
import { useUser } from "../../../hooks/useUserContext";


export const Navbar = (): JSX.Element => {
  const [navbar, setNavbar] = useState(false);
  const { logout, isLoading, error } = useLogout()
  const token = localStorage.getItem('token')
  const user = useUser();
  const handleLogoutButton = async () => {
    await logout();
  }

  if(isLoading) {
    <LoadingComponent />
  }

  return (
    <nav className="w-full bg-zinc-700 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-5xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-2xl text-gray-200 font-bold">MSN</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-200 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            { (user.authenticated && token) &&
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li
                className="
                text-gray-200 
                hover:text-white 
                hover:bg-blue-700 
                rounded-md
                px-1 py-1 
                pointer 
                focus:ring-4 
                focus:ring-blue-300 
                transition-all"
              >
                <button
                  className="                
                    focus:ring-4 
                    px-4 
                    py-1 
                    rounded                 
                    text-gray-200 
                    hover:text-white 
                    focus:ring-blue-300
                    focus:bg-blue-700 
                    "
                    onClick={handleLogoutButton}
                >
                  Logout
                </button>
              </li>
            </ul>
            }
            {(!user.authenticated || !token)&&
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li
                className="
                text-gray-200 
                hover:text-white 
                hover:bg-blue-700 
                rounded-md
                px-1 py-2 
                pointer 
                focus:ring-4 
                focus:ring-blue-300 
                transition-all"
              >
                <a
                  className="                
                focus:ring-4 
                px-4 
                py-2 
                rounded                 
                text-gray-200 
                hover:text-white 
                focus:ring-blue-300
                focus:bg-blue-700 
                "
                  href="/login"
                >
                  Login
                </a>
              </li>
              <li
                className="
                text-gray-200 
                hover:text-white 
                hover:bg-blue-700 
                rounded-md
                px-1 py-2 
                pointer 
                focus:ring-4 
                focus:ring-blue-300 
                transition-all"
              >
                <a
                  className="                
                focus:ring-4 
                px-4 
                py-2 
                rounded                 
                text-gray-200 
                hover:text-white 
                focus:ring-blue-300
                focus:bg-blue-700 
                "
                  href="/register"
                >
                  Register
                </a>
              </li>
            </ul>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};
