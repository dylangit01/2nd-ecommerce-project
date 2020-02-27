import {CartActionTypes} from "./cart.types";

export const toggleCartIconAction = () => ({
    type: CartActionTypes.TOGGLE_CART_ICON,
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});
