import React from "react";
// import './cart-icon.styles.scss'

// import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import {connect} from 'react-redux'
import {toggleCartIconAction} from "../../redux/cart/cart.actitons";
import {selectCartItemCount} from "../../redux/cart/cart.selector";
import {createStructuredSelector} from "reselect";

import {CartIconContainer, ItemCountContainer, ShoppingIconContainer} from "./cart-icon.styles";

const CartIcon = ({toggleCartIconAction, itemCount}) => (
    <CartIconContainer onClick={toggleCartIconAction}>
        <ShoppingIconContainer/>
        <ItemCountContainer> {itemCount} </ItemCountContainer>
    </CartIconContainer>
);


// const CartIcon = ({toggleCartIconAction, itemCount}) => (
//     <div className='cart-icon' onClick={toggleCartIconAction}>
//         <ShoppingIcon className='shopping-icon'/>
//         <span className='item-count'> {itemCount} </span>
//     </div>
// );

const mapDispatchToProps = dispatch => ({
    toggleCartIconAction: ()=> dispatch(toggleCartIconAction())
});

// this function has to return a value, so either write return in it, or using ({}) after "dispatch =>"
// const mapDispatchToProps = dispatch => {
//     return {
//         toggleCartIconAction: () => dispatch(toggleCartIconAction())
//     }
// };

// since we use createSelector method to replace the cartItems reducer, we can write as below by pass in (state)
// const mapStateToProps = ({cart: {cartItems}}) => ({
//     itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,0)
// });

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
