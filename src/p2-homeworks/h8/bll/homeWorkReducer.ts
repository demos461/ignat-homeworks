import {UserType} from '../HW8';

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'SORT': {
            return action.payload === 'up'
                ? [...state].sort((a, b) => a.name < b.name ? 1 : -1)
                : [...state].sort((a, b) => a.name > b.name ? 1 : -1)
        }
        case 'CHECK': {
            const copyState = [...state]
            return copyState.filter(u => u.age > 18)
        }
        default:
            return state
    }
}

type ActionType = sortACType | checkACType


type sortACType = ReturnType<typeof sortAC>
type checkACType = ReturnType<typeof checkAC>

export const sortAC = (payload: 'up' | 'down') => {
    return {
        type: 'SORT',
        payload
    } as const
}

export const checkAC = () => {
    return {
        type: 'CHECK'
    } as const
}

