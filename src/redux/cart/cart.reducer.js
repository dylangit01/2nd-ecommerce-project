import {CartActionTypes} from "./cart.types";

const INITIAL_STATE = {
    hidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
    if (action.type === CartActionTypes.TOGGLE_CART_ICON) {
        return {
            ...state,
            hidden: !state.hidden
        }
    } else {
        return state
    }
};

// const cartReducer = ({state = INITIAL_STATE, action}) => {
//     switch (action.type) {
//         case CartActionTypes.TOGGLE_CART_ICON:
//             return {
//                 ...state,
//                 hidden: !state.hidden
//             };
//         default:
//             return state
//     }
// };

export default cartReducer
