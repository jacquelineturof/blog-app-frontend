import * as actionTypes from './actionTypes'

export const setError = e => {
    return {
        type: actionTypes.SET_ERROR,
        payload: e
    }
}

export const setMessage = msg => {
    return {
        type: actionTypes.SET_MESSAGE,
        payload: msg
    }
}

export const clearNotification = () => {
    return {
        type: actionTypes.CLEAR_NOTIFICATION
    }
}