import React from 'react'

import classes from './Button.module.css'

/*
    Button UI.
    Props: 
    @children -> will hold label for our button
    @type -> determines the css class
    @isSubmit -> is a boolean true -> submit button
    @clicked => hold a reference to our click listener function,
    only used if isSubmit is false.
*/
export default function Button({ children, type, isSubmit, clicked }) {
    return (
        <button
            type = { isSubmit ? 'submit' : 'button' } 
            className = { [ classes.Btn, classes[type] ].join(' ')}
            onClick = { isSubmit ? null : clicked }>
            { children }
        </button>
    )
}