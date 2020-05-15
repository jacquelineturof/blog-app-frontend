import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../utility/updateObject'

const initialState = {
    isOpen: false
}

const openMenu = ( state, action ) => {
    return updateObject(state, { isOpen: true })
}

const closeMenu = ( state, action ) => {
    return updateObject(state, { isOpen: false })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.OPEN_MENU: return openMenu(state, action)
        case actionTypes.CLOSE_MENU: return closeMenu(state, action)
        default: return state
    }
}

export default reducer