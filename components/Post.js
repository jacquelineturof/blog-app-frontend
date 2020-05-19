import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './Post.module.css'

const Post = ({ post, closePost }) => {
    return (
        <div className = { classes.PostContainer }>
            <div className = { classes.Content }>
                <FontAwesomeIcon
                    onClick = { closePost } 
                    icon = { [ 'fal', 'times' ] } 
                    className = { classes.Icon } />
                <h1>{ post.title }</h1>
                <p>{ post.body }</p>
            </div>
        </div>
    )
}

export default Post