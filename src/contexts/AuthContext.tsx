import { createContext, ReactNode, useReducer, useEffect } from "react";
import { useUser } from "../hooks/useUserContext";
import { AuthReducer } from "../reducers/AuthReducer";

type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [ state, dispatch ] = useReducer(AuthReducer, {
        user: null,
    })
    const { email }: any = useUser()
    useEffect(() => {
        const userStorage = localStorage.getItem('user')!
        console.log('userStorage', userStorage === email)
        if ( email === userStorage ) {
            dispatch({ type: 'LOGIN', payload: email })
        } else {
            // localStorage.removeItem('email')
            // localStorage.removeItem('token')
            dispatch({ type: 'LOGOUT', payload: null })
        }
    }, [email])

    console.log('AuthContext state: ', state)
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )

}