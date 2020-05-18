import React from 'react'

import Link from 'next/link'
import Router from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './SideDrawer.module.css'

const AuthLink = ({ isAuth, setIsMenuOpen }) => {
    const icon = isAuth ? 'sign-out' : 'sign-in'

    const routeHandler = () => {
        Router.push('/auth')
        setIsMenuOpen(false)
    }

    return (
        <div 
            className = { classes.AuthLinkContainer }
            onClick = { routeHandler  }>
            <FontAwesomeIcon
                icon = { [ 'fal', icon ] } 
                className = { classes.Icon } />
            <p className = { classes.Label }>{ isAuth ? 'Logout' : 'Login '}</p>
        </div>
    )
}

const LinkList = ({ isAuth, isAdmin }) => {
    let links = null

    if (isAuth && isAdmin) {
        links = (
            <>
                <li>
                    <Link href="/createBlog">
                        <a>Create Post</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>View Posts</a>
                    </Link>
                </li>
            </>
        )
    }

    if (isAuth && !isAdmin) {
        links = (
            <>
                <li>
                    <Link href="/">
                        <a>View Posts</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Comment History</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Account Info</a>
                    </Link>
                </li>
            </>
        )
    }

    const linkList = (
        <ul className = { classes.LinkContainer }>
            { links }
        </ul>
    )

    return linkList
}

const SideDrawer = ({ setIsMenuOpen, isAuth, isAdmin }) => {
    const content = (
        <div className = { [ classes.Content, classes.Center ].join(' ') }>
            <AuthLink isAuth = { isAuth } setIsMenuOpen = { setIsMenuOpen } />
            <LinkList isAuth = { isAuth } isAdmin = { isAdmin } />
        </div>
    )

    return (
        <div className = { [ classes.SideDrawer, classes.Center ].join(' ') }>
            { content }
        </div>
    )
}

export default SideDrawer