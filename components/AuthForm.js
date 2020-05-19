import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Router from 'next/router'

import Input from './UI/Input'
import Button from './UI/Button'

import * as actions from '../store/actions'

import classes from './AuthForm.module.css'

const AuthForm = () => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const isAdmin = useSelector(state => state.auth.isAdmin)
    
    // form state
    const [ isLogin, setIsLogin ] = useState(true)

    /*
        Form Inputs
    */
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')

    const tagLine = isLogin
        ? 'Login to your account to join the conversation'
        : 'Create an account to join the conversation'

    /*
        Form Inputs Config
    */
    const USERNAME_CONFIG = {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Username'
        },
        iconConfig: {
            name: 'signature',
            package: 'fal'
        },
        value: username,
        changed: e => setUsername(e.target.value)
    }

    const EMAIL_CONFIG = {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your Email'
        },
        iconConfig: {
            name: 'at',
            package: 'fal'
        },
        value: email,
        changed: e => setEmail(e.target.value)
    }

    const PASSWORD_CONFIG = {
        elementType: 'input',
        elementConfig: {
            type: 'password',
            placeholder: 'Password'
        },
        iconConfig: {
            name: 'lock-alt',
            package: 'fal'
        },
        value: password,
        changed: e => setPassword(e.target.value)
    }

    const CONFIRM_PASSWORD_CONFIG = {
        elementType: 'input',
        elementConfig: {
            type: 'password',
            placeholder: 'Confirm Password'
        },
        iconConfig: {
            name: 'check',
            package: 'fal'
        },
        value: confirmPassword,
        changed: e => setConfirmPassword(e.target.value)
    }

    const onSubmitHandler = async e => {
        e.preventDefault()
        if (isLogin) {
            await dispatch(actions.auth(username, password, false, false))
        } else {
            await dispatch(actions.auth(username, password, true, false, email))
        }
        
        resetHandler()

        if (token) {
            isAdmin ? Router.push('/adminHome') : Router.push('/userHome')
        }
    }

    const resetHandler = () => {
        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <div className = { classes.FormContainer }>
            <div className = { classes.Banner }>
                <h1 className = { classes.AppName }>Bloggr</h1>
                <p className = { classes.TagLine }>
                    { tagLine }
                </p>
            </div>
            <form 
                className = { [ classes.Form, classes.Column ].join(' ')}
                onSubmit = { onSubmitHandler }>
                <div className = { [ classes.Inputs, classes.Column ].join(' ')}>
                    <Input { ...USERNAME_CONFIG } /> 
                    { !isLogin ? <Input { ...EMAIL_CONFIG } /> : null }
                    <Input { ...PASSWORD_CONFIG }/>
                    { !isLogin ? <Input { ...CONFIRM_PASSWORD_CONFIG } /> : null }
                </div>
                <Button 
                    type = "Primary"
                    isSubmit = { true }>
                    Submit
                </Button>
                <Button 
                    type = "Simple"
                    clicked = { () => setIsLogin(!isLogin) }>
                    { isLogin ? 'Create An Account' : 'Already Have An Account?' }
                </Button>
            </form>
        </div>
    )
}

export default AuthForm