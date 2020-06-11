import * as types from '../types'
const initialState = {
    user: {},
    players: [],
    isLoading: false
}

export const reducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case types.LOGIN_START:
        case types.LOGIN_FAIL:
            return {
                ...state,
                isLoading: payload
            }
        case types.LOGIN_SUCCESS: 
            return{
                ...state,
                isLoading: payload.isLoading,
                user: {...payload.user}
            }
        default:
            return state
    }
}