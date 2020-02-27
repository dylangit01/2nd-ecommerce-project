import {CartActionTypes} from "./cart.types";
import {addItemToCart} from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    if (action.type === CartActionTypes.TOGGLE_CART_ICON) {
        return {
            ...state,
            hidden: !state.hidden
        }
    } else if(action.type === CartActionTypes.ADD_ITEM) {
        return {
            ...state,
            // cartItems: [...state.cartItems, action.payload]
            // since we import the cart.utils.js, we can write as below:
            cartItems: addItemToCart(state.cartItems, action.payload)
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
