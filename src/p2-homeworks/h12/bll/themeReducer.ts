type StateType = {
    theme: string
}

const initState : StateType = {
    theme: ''
};

export const themeReducer = (state: StateType = initState, action: ActionsType): StateType => {
    switch (action.type) {
        case 'CHANGE_THEME': {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
};

export const changeTheme = (theme: string) => {
    return {
        type: 'CHANGE_THEME',
        payload: {
            theme
        }
    }
};

type ActionsType = ReturnType<typeof changeTheme>