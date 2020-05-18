import React from 'react'

import AuthForm from '../components/AuthForm'

const styles = {
    container: {
        height: '95vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const auth = () => {
    return (
        <section style = { styles.container }>
            <AuthForm />
        </section>
    )
}

export default auth