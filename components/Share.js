import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './Share.module.css'

const Share = ({ setIsShareMenuOpen, isShareMenuOpen }) => {
    return (
        <FontAwesomeIcon
            icon = { [ 'fal', 'share-alt' ] }
            onClick = { () => setIsShareMenuOpen(!isShareMenuOpen) } 
            className = { classes.Icon } />
    )
}

export default Share