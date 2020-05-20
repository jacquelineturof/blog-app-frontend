import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Input from './UI/Input'
import Button from './UI/Button'

import axios from '../axios-backend'

import classes from './CommentForm.module.css'

const CommentForm = ({ postId, closeForm }) => {
    const token = useSelector(state => state.auth.token)
    const [ comment, setComment ] = useState('')

    const INPUT_CONFIG = {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Enter Comment'
        },
        iconConfig: {
            name: 'signature',
            package: 'fal'
        },
        value: comment,
        changed: e => setComment(e.target.value)
    }

    const onSubmitHandler = async e => {
        e.preventDefault()

        const config = {
            headers: {
                'x-auth': token
            }
        }

        const body = { text: comment }

        await axios.post(`post/${postId}/comment`, body, config)
        closeForm()
    }

    return (
        <form 
            className = { classes.Form }
            onSubmit = { onSubmitHandler }>
            <Input { ...INPUT_CONFIG } />
            <Button isSubmit = { true }>
                Submit Comment
            </Button>
        </form>
    )
}

export default CommentForm