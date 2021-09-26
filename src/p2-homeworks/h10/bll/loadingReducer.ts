type StateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionsType): StateType => {
    switch (action.type) {
        case 'IS_LOADING': {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

type ActionsType = loadingACType

type loadingACType = {
    type: string,
    payload: {
        isLoading: boolean
    }
}

export const loadingAC = (isLoading: boolean): loadingACType => {
    return {
        type: 'IS_LOADING',
        payload: {isLoading,}
    }
}