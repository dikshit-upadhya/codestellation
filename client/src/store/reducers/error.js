import types from '../types'

const initialState = {
    statusCode: null,
    description: null,
    payload: null,
    isOpen: false
}

const errorReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.OPEN_ERROR: 
            return {
                ...state, 
                ...action.payload, 
                isOpen: true
            }
        case types.CLOSE_ERROR: 
            return {
                ...state, 
                isOpen: false
            }
        default: 
            return state;
    }
}

export default errorReducer