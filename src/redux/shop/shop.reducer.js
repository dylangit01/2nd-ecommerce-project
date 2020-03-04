// since we moved the shop data into firebase, we dont need this shop file anymore
// import SHOP_DATA from "./shop";
import {ShopActionTypes} from "./shop.types";

const INITIAL_STATE = {
    collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
    if(action.type === ShopActionTypes.UPDATE_COLLECTIONS){
        return {
            ...state,
            collections: action.payload
        }
    }
    return state
};


export default shopReducer

