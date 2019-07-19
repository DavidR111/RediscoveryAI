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
            rectLists: state.rectLists.concat({ ...rect, id: state.idLimit, enable: true }),
            idLimit: state.idLimit + 1
        }
    },
    [types.UPDATE_RECT]: (state, { payload: { rect } }) => {

        let rectLists = state.rectLists
        rectLists = rectLists.map((arect) => {
            return rect.id === arect.id ? rect : arect
        })

        return {
            ...state,
            rectLists
        }
    },
    [types.SET_RECT_ENABLE]: (state, { payload: { data } }) => {
        let rectLists = state.rectLists
        rectLists = rectLists.map((arect) => {
            return arect.id === data.id ? { ...arect, enable: data.enable } : arect
        })

        return {
            ...state,
            rectLists
        }
    }
}, initialState)

export default objectReducer