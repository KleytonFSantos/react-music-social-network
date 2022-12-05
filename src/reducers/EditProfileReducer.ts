type Action = {
    type: 'EDIT_PROFILE',
    payload: string | null
}

export const EditProfileReducer = (state: any, action: Action) => {
    switch (action.type) {
        case 'EDIT_PROFILE':
            return { data: action.payload }
        default:
            return state
    }
}
