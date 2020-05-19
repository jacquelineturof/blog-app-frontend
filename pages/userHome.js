import React from 'react'

import Banner from '../components/Banner'
import PostList from '../components/PostList'

const styles = {
    container: {
        height: '95vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}

const userHome = ({ posts }) => {
    return (
        <section style = { styles.container }>
            <Banner />
            <PostList posts = { posts } />
        </section>
    )
}

export default userHome

userHome.getInitialProps = async ctx => {
    const res = await fetch('http://localhost:3001/posts')
    const json = await res.json()
    return { posts: json.posts }
}