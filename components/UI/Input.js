import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './Input.module.css'

/*
    UI Input
    @param elementType { string } textarea || select
    @param elementConfig { obj } contains all the regular
    html config for the input
    @param value { any } the value of the input, should correspond to the
    kind of input element
    @changed { func } input change handler.
    @iconConfig { obj } obj containing info about the icon { name, package } = iconConfig
*/
const Input = ({ elementType, elementConfig, value, changed, iconConfig }) => {
    let inputElement = null
    const inputClasses = [ classes.InputElement ]

    /*
        Input choices textarea & select
        input will be default
    */
    switch( elementType ) {
        case ( 'select' ):
            inputClasses.push(classes.Select)
            inputElement = (
                <select
                    className = { inputClasses.join(' ') }
                    value = { value }
                    onChange = { changed }>
                    { elementConfig.options.map(option => (
                        <option key = { option.value } value = { option.value }>
                            { option.displayValue }
                        </option>
                    ))}
                </select>
            )
            break
        case ( 'textarea' ):
            inputClasses.push(classes.TextArea)
            inputElement = (
                <textarea
                    className = { inputClasses.join(' ') }
                    value = { value }
                    onChange = { changed }
                    { ...elementConfig }>
                </textarea>
            )
            break
        default: 
            inputElement = (
                <input
                    className = { inputClasses.join(' ')}
                    value = { value }
                    onChange = { changed }
                    { ...elementConfig } />
            )
    }

    const icon = iconConfig 
        ? (
            <FontAwesomeIcon 
                icon = { [ iconConfig.package, iconConfig.name ] } 
                className = { classes.Icon } /> 
        )
        : null
    
    return (
        <div className = { elementType === 'textarea' 
            ? [ classes.TextArea, classes.InputContainer ].join(' ') 
            : classes.InputContainer }>
            { icon }
            { inputElement }
        </div>
    )
}

export default Input