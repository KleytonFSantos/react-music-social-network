import { createContext, ReactNode, useReducer, useEffect } from "react";
import { EditProfileReducer } from "../reducers/EditProfileReducer";

type EditProfileProviderProps = {
    children: ReactNode
}

export const EditProfileContext = createContext({});

export const EditProfileProvider = ({ children }: EditProfileProviderProps) => {
    const [ state, dispatch ] = useReducer(EditProfileReducer, {
        data: null,
    })

    console.log('EditProfile state: ', state)
    return (
        <EditProfileContext.Provider value={{...state, dispatch}}>
            {children}
        </EditProfileContext.Provider>
    )

}