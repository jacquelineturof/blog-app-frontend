import React from 'react'
import { useSelector } from 'react-redux'

import classes from './PostList.module.css'

const Post = ({ post }) => (
    <div className = { classes.Post }>
        <h5 className = { classes.Category }>{ post.category }</h5>
        <h1>{ post.title }</h1>
        <p className = { classes.Date }>{ post.created }</p>
    </div>
)

function PostList ({ posts }) {
    const query = useSelector(state => state.query.queryTerm)
    const queryLowerCase = query.toLowerCase()
    const filteredPosts = query.length !== 0 
        ? posts.filter(post => post.title.toLowerCase().includes(queryLowerCase))
        : posts
    
    const postList = (
        <ul className = { classes.PostList }>
            { filteredPosts.map(post => (
                <Post
                    key = { post._id }
                    post = { post } />
            ))}
        </ul>
    )

    const errorMessage = 'Could Not Retrieve Posts'
    
    return posts.length === 0 ? errorMessage : postList
}

export default PostList


