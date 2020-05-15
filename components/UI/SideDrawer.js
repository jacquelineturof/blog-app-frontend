import React from 'react'

import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './SideDrawer.module.css'

const AuthLink = ({ isAuth }) => {
    const icon = isAuth ? 'sign-out' : 'sign-in'

    return (
        <div className = { classes.AuthLinkContainer }>
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
                    <Link href="/">
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

    links = (
        <ul className = { classes.LinkContainer }>

        </ul>
    )

    return links
}

const SideDrawer = () => {
    const content = (
        <div className = { [ classes.Content, classes.Center ].join(' ') }>
            <AuthLink isAuth = { false } />
            <LinkList isAuth = { false } isAdmin = { false } />
        </div>
    )

    return (
        <div className = { [ classes.SideDrawer, classes.Center ].join(' ') }>
            { content }
        </div>
    )
}

export default SideDrawer