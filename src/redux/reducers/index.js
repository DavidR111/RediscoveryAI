import { combineReducers } from 'redux'
import objectReducer from './object.reducer'

const rootReducer = combineReducers({
    objState: objectReducer
})

export default rootReducer