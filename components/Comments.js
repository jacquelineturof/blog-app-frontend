import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Button from './UI/Button'
import CommentForm from './CommentForm'
import Input from './UI/Input'

import axios from '../axios-backend'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './Comments.module.css'

const Comment = ({ comment, currentUser, token, setRefreshComments }) => {
    const [ showEditInput, setShowEditInput ] = useState(false)
    const [ updatedComment, setUpdatedComment ] = useState(comment.text)
    
    const INPUT_CONFIG = {
        elementType: 'input',
        elementConfig: {
            type: 'text'
        },
        iconConfig: {
            name: 'signature',
            package: 'fal'
        },
        value: updatedComment,
        changed: e => setUpdatedComment(e.target.value)
    }

    const onEditHandler = async e => {
        e.preventDefault()

        const config = {
            headers: {
                'x-auth': token
            }
        }

        const body = { text: updatedComment }

        await axios.put(`/comment/${comment._id}`, body, config)
        setShowEditInput(false)
        setRefreshComments(true)
    }

    const editCommentForm = (
        <form 
            className = { classes.EditForm }
            onSubmit = { onEditHandler }>
            <Input { ...INPUT_CONFIG } />
            <Button isSubmit = { true }>OK</Button> 
        </form>
    )

    const commentControl = currentUser === comment.username
        ? (
            <CommentControl
                showEditForm = { () => setShowEditInput(true) }
                deleteHandler = { () => deleteHandler(comment._id) } />
        )
        : null

    const deleteHandler = async commentId => {
        const config = {
            headers: {
                'x-auth': token
            }
        }

        await axios.delete(`/comment/${commentId}`, config)
        setRefreshComments(true)
    }

    return (
        <div className = { classes.Comment }>
            <div className = { classes.Content }>
                <h5>{ comment.username }</h5>
                { 
                    showEditInput 
                        ? editCommentForm
                        : <p className = { classes.CommentText }>{ comment.text }</p> 
                }
                <p className = { classes.CommentCreated }>{ comment.created }</p>
            </div>
            { commentControl }
        </div>
    )
}

const CommentControl = ({ deleteHandler, showEditForm }) => (
        <div className = { classes.CommentControlContainer }>
            <FontAwesomeIcon
                icon = { [ 'fal', 'times' ] }
                onClick = { deleteHandler } 
                className = { classes.Icon } />
            <FontAwesomeIcon
                icon = { [ 'fal', 'comment-edit' ] }
                onClick = { showEditForm } 
                className = { classes.Icon } />
        </div>
    )

const Comments = ({ postId }) => {
    const currentUser = useSelector(state => state.auth.username)
    const token = useSelector(state => state.auth.token)
    const [ comments, setComments ] = useState([])
    const [ viewCommentForm, setViewCommentForm ] = useState(false)
    const [ refreshComments, setRefreshComments ] = useState(false)

    useEffect(() => {
        const fetchComments = async () => {
            const res = await axios.get(`post/${postId}/comment`)
            setComments(res.data.comments)
        }

        fetchComments()
    }, [ viewCommentForm, refreshComments ])

    const commentContent = (
        viewCommentForm
            ? <CommentForm closeForm = { () => setViewCommentForm(false) } />
            : (
                <>
                    { comments.map(comment => 
                    <Comment 
                        key = { comment._id } 
                        comment = { comment }
                        currentUser = { currentUser }
                        token = { token }
                        setRefreshComments = { setRefreshComments } /> )}
                </>

            )
    )

    return (
        <div className = { classes.CommentsContainer }>
            <Button
                isSubmit = { false }
                clicked = { () => setViewCommentForm(!viewCommentForm) }>
                {  viewCommentForm ? 'Close Comment Form' : 'Add Comment' }
            </Button>
            { commentContent }
        </div>
    )
}

export default Comments