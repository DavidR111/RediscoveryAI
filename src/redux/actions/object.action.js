import * as types from '../actionTypes/object.type'
import { createActions } from 'redux-actions'

export const {
    setMode,
    pushRect,
    updateRect,
    setRectEnable,
    setUpdateScreen,
    setSelectedIndex
} = createActions({
    [types.SET_MODE]: (mode) => ({ mode }),
    [types.PUSH_RECT]: (rect) => ({ rect }),
    [types.UPDATE_RECT]: (rect) => ({ rect }),
    [types.SET_RECT_ENABLE]: (data) => ({ data }),
    [types.SET_UPDATE_SCREEN]: (update) => ({ update }),
    [types.SET_SELECTED_INDEX]: (data) => ({ data })
})