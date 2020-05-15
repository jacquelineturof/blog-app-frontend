import React from 'react'

import Banner from '../components/Banner'
import PostList from '../components/PostList'

const styles = { 
    container: {
        display: 'flex'
    }
}

const Index = ({ posts }) => (
    <section style = { styles.container }>
        <Banner />
        <PostList posts = { posts } />
    </section>
)

export default Index

Index.getInitialProps = async ctx => {
    const res = await fetch('http://localhost:3001/posts')
    const json = await res.json()
    console.log(json.posts)
    return { posts: json.posts }
}