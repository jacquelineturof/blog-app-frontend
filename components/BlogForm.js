import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Input from './UI/Input'
import Button from './UI/Button'

import axios from '../axios-backend'

import classes from './BlogForm.module.css'

const BlogForm = () => {
    const token = useSelector(state => state.auth.token)
    const [ title, setTitle ] = useState('')
    const [ category, setCategory ] = useState('Science')
    const [ body, setBody ] = useState('')

    /*
        Form Inputs Config
    */
    const TITLE_CONFIG = {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Post Title'
        },
        value: title,
        changed: e => setTitle(e.target.value)
    }

    const BODY_CONFIG = {
        elementType: 'textarea',
        elementConfig: {
            placeholder: 'Post Body Goes Here...'
        },
        value: body,
        changed: e => setBody(e.target.value)
    }

    const CATEGORY_CONFIG = {
        elementType: 'select',
        elementConfig: {
            options: [
                { value: 'Pop Culure', displayValue: 'Pop Culture' },
                { value: 'Technology', displayValue: 'Technology' },
                { value: 'Science', displayValue: 'Science' }
            ]
        },
        value: category,
        changed: e => setCategory(e.target.value)
    }

    const onSubmitHandler = async e => {
        e.preventDefault()

        const content = { title, body, category }
        const config = {
            headers: {
                'x-auth': token
            }
        }

        try {
            await axios.post('post', content, config)
            resetForm()
        } catch (e) {
            console.log(e)
        }
    }

    const resetForm = () => {
        setTitle('')
        setCategory('Science')
        setBody('')
    }

    return (
        <div className = { classes.BackgroundContainer }>
            <form 
                className = { classes.Form }
                onSubmit = { onSubmitHandler }>
                <Input { ...TITLE_CONFIG }/>
                <Input { ...CATEGORY_CONFIG } />
                <Input { ...BODY_CONFIG } />
                <Button type = "Primary" isSubmit = { true }>
                    Submit Post
                </Button>
            </form>
        </div>

    )
}

export default BlogForm