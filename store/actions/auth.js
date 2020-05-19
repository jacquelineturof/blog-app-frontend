import * as actionTypes from './actionTypes'

import axios from '../../axios-backend'

import * as actions from './index.js'

export const loginUser = user => {
    return {
        type: actionTypes.LOGIN_AUTH_USER,
        payload: user
    }
}

export const logoutUser = () => {
    return {
        type: actionTypes.LOGOUT_AUTH_USER
    }
}

export const authStart = () => {
    return {
        type: actionTypes.START_AUTH
    }
}


/* 
    Send auth data to backend.
    param isSignup will determine which url we send our auth data to.
    Will set error or success on auth store depending on which action we dispatch
    from try / catch block
    isAdmin(boolean) send to backend to let us know which privelages a user has
*/
export const auth = (username, password, isSignup, isAdmin, email) => {
    return async dispatch => {
        dispatch(authStart())
        
        const authData = isSignup 
            ? { username, email, password, isAdmin }
            : { username, password }
        
        let url = isSignup ? 'user' : 'user/login'

        try {
            const response = await axios.post(url, authData)
            if (!response) throw new Error('User Not Found')

            if (!isSignup) {
                localStorage.setItem('blog-token', response.data.token)
                localStorage.setItem('blog-username', response.data.username)
                localStorage.setItem('blog-is-admin', response.data.isAdmin)
                dispatch(loginUser(response.data))
            } else {
                dispatch(actions.setMessage('registration success'))
            }
        } catch (e) {
            let errorMessage = 'Login failed!'

            if (isSignup) errorMessage = 'Sign up failed!'

            dispatch(actions.setError(errorMessage))
        }
    }
}

/*
    Check for saved token on localStorage to have a persistant state
*/
export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('blog-token')
        const username = localStorage.getItem('blog-username')
        const isAdmin = localStorage.getItem('blog-is-admin')

        const loggedInUser = { token, username, isAdmin }
        
        if (!token) {
            dispatch(logoutUser())
        } else {
            dispatch(loginUser(loggedInUser))
        }
    }
}

export const startLogout = token => {
    return async dispatch => {
        try {
            const config = {
                headers: {
                    'x-auth': token
                }
            }

            await axios.delete('user/login', config)

            localStorage.removeItem('blog-token')
            localStorage.removeItem('blog-username')
            localStorage.removeItem('blog-is-admin')
            dispatch(logoutUser())
        } catch (e) {
            dispatch(actions.setError(errorMessage))
        }
    }
}