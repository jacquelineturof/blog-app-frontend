import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Link from 'next/link'
import Router from 'next/router'

import * as actions from '../../store/actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './SideDrawer.module.css'

const AuthLink = ({ token, setIsMenuOpen }) => {
    const dispatch = useDispatch()

    const icon = token !== null ? 'sign-out' : 'sign-in'

    const authHandler = () => {
        Router.push('/auth')
        setIsMenuOpen(false)
    }

    const logoutHandler = () => {
        dispatch(actions.startLogout(token))
    }

    return (
        <div 
            className = { classes.AuthLinkContainer }
            onClick = { token !== null ? logoutHandler: authHandler }>
            <FontAwesomeIcon
                icon = { [ 'fal', icon ] } 
                className = { classes.Icon } />
            <p className = { classes.Label }>{ token !== null ? 'Logout' : 'Login '}</p>
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

const SideDrawer = ({ setIsMenuOpen }) => {
    const token = useSelector(state => state.auth.token)
    const isAdmin = useSelector(state => state.auth.isAdmin)
    
    const content = (
        <div className = { [ classes.Content, classes.Center ].join(' ') }>
            <AuthLink token = { token } setIsMenuOpen = { setIsMenuOpen } />
            <LinkList isAuth = { token !== null } isAdmin = { isAdmin } />
        </div>
    )

    return (
        <div className = { [ classes.SideDrawer, classes.Center ].join(' ') }>
            { content }
        </div>
    )
}

export default SideDrawer