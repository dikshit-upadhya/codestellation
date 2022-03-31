import {combineReducers} from 'redux'

import errorReducer from './reducers/error'
import successReducer from './reducers/success'

const allReducers = combineReducers({
    error: errorReducer, 
    success: successReducer
})

export default allReducers