type Action = {
    type: 'LOGIN' | 'LOGOUT' | 'REGISTER',
    payload: string | null
}

export const AuthReducer = (state: any, action: Action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'REGISTER':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }

        default:
            return state
    }
}
