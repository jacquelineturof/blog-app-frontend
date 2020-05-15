import * as actionTypes from './actionTypes'

export const openMenu = () => {
    return {
        type: actionTypes.OPEN_MENU
    }
}

export const closeMenu = () => {
    return {
        type: actionTypes.CLOSE_MENU
    }
}