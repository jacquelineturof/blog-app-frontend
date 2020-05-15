import React, { useState } from 'react'

import NavBar from './UI/NavBar'
import SideDrawer from './UI/SideDrawer'
import Backdrop from './UI/Backdrop'
import ShareMenu from './UI/ShareMenu'

const styles = {
    content: {
        transform: 'translateY(5vh)',
        position: 'relative'
    }
}

const Layout = ({ children }) => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)
    const [ isShareMenuOpen, setIsShareMenuOpen ] = useState(false)

    return (
        <section>
            <NavBar 
                isMenuOpen = { isMenuOpen } 
                setIsMenuOpen = { setIsMenuOpen }
                setIsShareMenuOpen = { setIsShareMenuOpen } 
                isShareMenuOpen = { isShareMenuOpen } />
            { isMenuOpen ? <SideDrawer /> : null }
            { isMenuOpen ? <Backdrop /> : null }
            { isShareMenuOpen ? <ShareMenu /> : null }
            <div style = { styles.content }>
                { children }
            </div>
        </section>
    )
}

export default Layout