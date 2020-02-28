import {CartActionTypes} from "./cart.types";

export const toggleCartIconAction = () => ({
    type: CartActionTypes.TOGGLE_CART_ICON,
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const leftArrowRemoveItem = item => ({
    type: CartActionTypes.LEFT_ARROW_REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});
