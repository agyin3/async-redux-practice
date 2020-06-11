import * as types from '../types'
import axios from 'axios'

export const login = (creds, history) => dispatch => {
    dispatch({type: types.LOGIN_START, payload: true})
    axios.post('https://better-professor-app-1.herokuapp.com/api/auth/login/?type=p', creds)
        .then(res => {
            dispatch({type: types.LOGIN_SUCCESS, payload: {user: res.data.data.user, isLoading: false}})
            history.push('/players')
        })
        .catch(err => {
            dispatch({type: types.LOGIN_FAIL, payload: false})
        })
}