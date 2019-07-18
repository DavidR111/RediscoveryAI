import * as types from '../actionTypes/object.type'
import { createActions } from 'redux-actions'

export const {
    setMode,
    pushRect
} = createActions({
    [types.SET_MODE]: (mode) => ({ mode }),
    [types.PUSH_RECT]: (rect) => ({ rect })
})