import React, { useState } from 'react'

import Banner from '../components/Banner'
import PostList from '../components/PostList'
import Post from '../components/Post'
import Backdrop from '../components/UI/Backdrop'

const styles = {
    container: {
        height: '95vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}

const adminHome = ({ posts }) => {
    const [ post, setPost ] = useState(null)

    return (
        <section style = { styles.container }>
            <Banner />
            <PostList posts = { posts } viewPost = { setPost } />
            { post 
                ? (
                    <Post 
                        post = { post } 
                        closePost = { () => setPost(null) } /> 
                )
                : null }
            { post ? <Backdrop /> : null }
        </section>
    )
}

export default adminHome

adminHome.getInitialProps = async ctx => {
    const res = await fetch('http://localhost:3001/posts')
    const json = await res.json()
    return { posts: json.posts }
}