import React from 'react'

import classes from './Notification.module.css'

const Notification = ({ type, message }) => {
    const notificationClasses = [ classes.Notification ]
    
    return (
        <div className = { notificationClasses.join(' ')}>
            { message }
        </div>
    )
}

export default Notification