import React from "react";
import './cart-icon.styles.scss'

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import {connect} from 'react-redux'
import {toggleCartIconAction} from "../../redux/cart/cart.actitons";

const CartIcon = ({toggleCartIconAction}) => (
    <div className='cart-icon' onClick={toggleCartIconAction}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> 0 </span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartIconAction: ()=> dispatch(toggleCartIconAction())
});

// this function has to return a value, so either write return in it, or using ({}) after "dispatch =>"
// const mapDispatchToProps = dispatch => {
//     return {
//         toggleCartIconAction: () => dispatch(toggleCartIconAction())
//     }
// };

export default connect(null, mapDispatchToProps)(CartIcon)
