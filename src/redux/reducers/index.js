import { combineReducers } from 'redux'
//import imgReducer from './img.reducer'
import objectReducer from './object.reducer'

const rootReducer = combineReducers({
    //imgState: imgReducer,
    objState: objectReducer
})

export default rootReducer