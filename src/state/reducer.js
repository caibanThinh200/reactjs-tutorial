import { combineReducers } from "redux";
import counterType from "./type";

const initialValue = {
    value: 0
};

function counterReducer(state = initialValue, action) {
    switch (action.type) {
        case counterType.INCREAMENT:
            return { value: state.value + action.payload }
        case counterType.DECREAMENT:
            return { value: state.value - action.payload }
        default:
            return state
    }
}

const initValue2 = {
    value: 1
}

function todoListReducer(state = initialValue, action) {
    switch (action.type) {
        case counterType.INCREAMENT: {
            // console.log(state, action)
            return { value: state.value + action.payload }
        }
        case 'counter/decremented':
            return { value: state.value - action.payload }
        default:
            return state
    }
}

// reducer lấy sp
// reducer thanh toán 
/// reducer lọc sp

const combineReducer = combineReducers({
    counterReducer,
    todoListReducer
});

export default combineReducer;