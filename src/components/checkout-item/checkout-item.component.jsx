import React from "react";
import './checkout-item.styles.scss'

import {connect} from 'react-redux'
import {addItem, clearItemFromCart, leftArrowRemoveItem} from "../../redux/cart/cart.actitons";

const CheckoutItem = ({cartItem, clearItemFromCart, arrowAddItem, leftArrowRemoveItem}) => {
    const {name, quantity, price, imageUrl} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt=""/>
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => leftArrowRemoveItem(cartItem)}>&#10094;</div>
                <div className='value'>
                    {quantity}
                </div>
                <div className='arrow' onClick={() => arrowAddItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button'
                 onClick={() => clearItemFromCart(cartItem)}
            >&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    arrowAddItem: item => dispatch(addItem(item)),
    leftArrowRemoveItem: item => dispatch(leftArrowRemoveItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem)
