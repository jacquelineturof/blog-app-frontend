import React from 'react'

import classes from './Backdrop.module.css'

const Backdrop = ({ translate }) => {
    const cssClasses = [ classes.Backdrop ]

    if (translate) {
        cssClasses.push(classes.Translate)
    }
    
    return (
        <div className = { cssClasses.join(' ') }>

        </div>
    )
}

export default Backdrop