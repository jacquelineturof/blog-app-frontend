import React, { useState } from 'react'

import Button from './UI/Button'
import Comments from './Comments'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './Post.module.css'

const Post = ({ post, closePost }) => {
    const [ viewComments, setViewComments ] = useState(false)
    console.log(viewComments)
    return (
        <div className = { classes.PostContainer }>
            <div className = { classes.Content }>
                <FontAwesomeIcon
                    onClick = { closePost } 
                    icon = { [ 'fal', 'times' ] } 
                    className = { classes.Icon } />
                <h1>{ post.title }</h1>
                <p>{ post.body }</p>
                { 
                    viewComments 
                        ? <Comments postId = { post._id } />
                        : (
                            <Button
                                isSubmit = { false }
                                clicked = { () => setViewComments(true) }>
                                Show Comments
                            </Button>
                        ) 
                }
            </div>
        </div>
    )
}

export default Post