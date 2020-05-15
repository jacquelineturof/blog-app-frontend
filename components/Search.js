import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as actions from '../store/actions'

import classes from './Search.module.css'

const Search = () => {
    const [ isInputVisible, setIsInputVisible ] = useState(false )
    const query = useSelector(state => state.query.queryTerm)
    const dispatch = useDispatch()
    
    const searchIcon = (
        <FontAwesomeIcon
            onClick = { () => setIsInputVisible(true) } 
            icon = { [ 'fal', 'search' ] } 
            className = { classes.Icon } />
    )

    const input = (
        <input 
            className = { classes.SearchInput }
            placeholder = "Search Posts"
            value = { query }
            onChange = { e => dispatch(actions.setQuery(e.target.value))} />
    )

    return isInputVisible ? input : searchIcon
}

export default Search