import React from "react";
// import './cart-dropdown.sytles.scss'
// import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import {connect} from 'react-redux'
import {selectCartItems} from "../../redux/cart/cart.selector";
import {createStructuredSelector} from "reselect";

import {withRouter} from 'react-router-dom'
import {toggleCartIconAction} from "../../redux/cart/cart.actitons";
import {CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CartDropdownButton} from "./cart-dropdown.styles";

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                    :
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CartDropdownButton
            // notice! => /checkout shouldn't have ".", which cause error in my app
            onClick={() => {
                history.push('/checkout');
                // so instead using mapDispatchToProps to fire an hidden cart-icon action, we can pass-in "dispatch" into the function directly and using it here,
                // notice, here have to add {} after "=>"
                dispatch(toggleCartIconAction())
            }}
        >
            GO TO CHECKOUT
        </CartDropdownButton>
    </CartDropdownContainer>
);

// const mapStateToProps = ({cart: {cartItems}}) => ({
//     cartItems
// });

// const mapStateToProps = (state) => ({
//     cartItems: selectCartItems(state)
// });

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown))
