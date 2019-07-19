import * as types from '../actionTypes/object.type'
import { handleActions } from 'redux-actions'

const initialState = {
    mode: false,
    rectLists: [],
    selectedIndex: -1,
    idLimit: 0
}

const objectReducer = handleActions({
    [types.SET_MODE]: (state, { payload: { mode } }) => {
        return {
            ...state,
            mode: mode
        }
    },
    [types.PUSH_RECT]: (state, { payload: { rect } }) => {
        return {
            ...state,
            rectLists: state.rectLists.concat({ ...rect, id: state.idLimit }),
            idLimit: state.idLimit + 1
        }
    },
}, initialState)

export default objectReducer