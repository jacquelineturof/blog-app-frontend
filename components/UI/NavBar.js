import React from 'react'

import Search from '../Search'
import Share from '../Share'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './NavBar.module.css'

const NavBar = ({ isMenuOpen, setIsMenuOpen, setIsShareMenuOpen, isShareMenuOpen }) => {
    const icon = isMenuOpen ? 'times' : 'bars'

    return (
        <nav className = { classes.NavBar }>
            <div className = { classes.NavBarLeft }>
                <FontAwesomeIcon
                    onClick = { () => setIsMenuOpen(!isMenuOpen) } 
                    icon = { [ 'fal', icon ] } 
                    className = { classes.Icon } />
                <h1 className = { classes.AppName }>bloggr</h1>
                <h5 className = { classes.TagLine }>Neutra fixie yr salvia</h5> 
            </div>
            <div className = { classes.NavBarRight }>
                <Search />
                <Share 
                    setIsShareMenuOpen = { setIsShareMenuOpen }
                    isShareMenuOpen = { isShareMenuOpen } />
            </div>
        </nav>
    )
}

export default NavBar