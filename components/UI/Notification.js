import React from 'react'
import { useDispatch } from 'react-redux'

import Button from './Button'

import * as actions from '../../store/actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './Notification.module.css'

const Notification = ({ type, message }) => {
    const dispatch = useDispatch()

    const notificationClasses = [ classes.Notification ]
    
    type === 'error'
        ? notificationClasses.push(classes.Error)
        : notificationClasses.push(classes.Message)

    const icon = type === 'error' ? 'exclamation-circle' : 'check'

    return (
        <div className = { notificationClasses.join(' ')}>
            <FontAwesomeIcon 
                icon = { [ 'fal', icon ] } 
                className = { classes.Icon } /> 
            <p className = { classes.Text }>{ message }</p>
            <Button
                isSubmit = { false } 
                type = "Notification"
                clicked = { () => dispatch(actions.clearNotification()) }>
                OK
            </Button>
        </div>
    )
}

export default Notification