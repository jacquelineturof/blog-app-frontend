import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import NavBar from './UI/NavBar'
import SideDrawer from './UI/SideDrawer'
import Backdrop from './UI/Backdrop'
import ShareMenu from './UI/ShareMenu'

import * as actions from '../store/actions'

const styles = {
    content: {
        transform: 'translateY(5vh)',
        position: 'relative'
    }
}

const Layout = ({ children }) => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const isAdmin = useSelector(state => state.auth.isAdmin)
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)
    const [ isShareMenuOpen, setIsShareMenuOpen ] = useState(false)

    // check local storage for auth token
    useEffect(() => {
        const fetchUserToken = async () => {
            await dispatch(actions.authCheckState())
        }
        
        fetchUserToken()
    }, [])

    return (
        <section>
            <NavBar 
                isMenuOpen = { isMenuOpen } 
                setIsMenuOpen = { setIsMenuOpen }
                setIsShareMenuOpen = { setIsShareMenuOpen } 
                isShareMenuOpen = { isShareMenuOpen } />
            { 
                isMenuOpen 
                    ? (
                        <SideDrawer 
                            setIsMenuOpen = { setIsMenuOpen }
                            isAuth = { token !== null }
                            isAdmin = { isAdmin } /> 
                    )
                    : null 
            }
            { isMenuOpen ? <Backdrop /> : null }
            { isShareMenuOpen ? <ShareMenu /> : null }
            <div style = { styles.content }>
                { children }
            </div>
        </section>
    )
}

export default Layout