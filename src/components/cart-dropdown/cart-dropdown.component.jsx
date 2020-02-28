import React from "react";
import './cart-dropdown.sytles.scss'
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import {connect} from 'react-redux'
import {selectCartItems} from "../../redux/cart/cart.selector";
import {createStructuredSelector} from "reselect";

import {withRouter} from 'react-router-dom'
import {toggleCartIconAction} from "../../redux/cart/cart.actitons";

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                    :
                    <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton
            onClick={() => {
                history.push('./checkout');
                // so instead using mapDispatchToProps to fire an hidden cart-icon action, we can pass-in "dispatch" into the function directly and using it here,
                // notice, here have to add {} after "=>"
                dispatch(toggleCartIconAction())
            }}
        >
            GO TO CHECKOUT
        </CustomButton>
    </div>
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
