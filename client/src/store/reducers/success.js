import types from '../types'

const initialState = {
    message: '',
    isOpen: false
}

const successReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.OPEN_SUCCESS: 
            return {
                message: action.payload.message,
                isOpen: true
            }
        case types.CLOSE_SUCCESS: 
            return {
                ...state, 
                isOpen: false
            }
        default: 
            return state;
    }
}

export default successReducer