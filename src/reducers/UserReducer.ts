type Action = {
    type: 'GET_USER',
    payload: string | null
}

export const UserReducer = (state: any, action: Action) => {
    switch (action.type) {
        case 'GET_USER':
            return { data: action.payload }
        default:
            return state
    }
}
