import { createContext, ReactNode, useReducer } from "react";
import { UserReducer } from "../reducers/UserReducer";

type UserContextProvider = {
    children: ReactNode
}

export const UserContext = createContext({});

export const UserContextProvider = ({ children }: UserContextProvider) => {
    const [ state, dispatch ] = useReducer(UserReducer, {
        data: null,
    })

    return (
        <UserContext.Provider value={{...state, dispatch}}>
            {children}
        </UserContext.Provider>
    )

}