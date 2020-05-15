import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../utility/updateObject'

const initialState = {
    queryTerm: ''
}

const setQuery = (state, action) => {
    return updateObject(state, { queryTerm: action.payload })
}

const clearQuery = (state, action) => {
    return updateObject(state, { queryTerm: '' })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_QUERY: return setQuery(state, action)
        case actionTypes.CLEAR_QUERY: return clearQuery(state, action)
        default: return state
    }
}

export default reducer