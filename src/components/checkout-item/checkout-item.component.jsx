import React from "react";
// import './checkout-item.styles.scss'

import {connect} from 'react-redux'
import {addItem, clearItemFromCart, leftArrowRemoveItem} from "../../redux/cart/cart.actitons";

import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

// const CheckoutItem = ({cartItem, clearItemFromCart, arrowAddItem, leftArrowRemoveItem}) => {
//     const {name, quantity, price, imageUrl} = cartItem;
//     return (
//         <CheckoutItemContainer>
//             <div className='image-container'>
//                 <img src={imageUrl} alt=""/>
//             </div>
//
//             <span className='name'>{name}</span>
//             <span className='quantity'>
//                 <div className='arrow' onClick={() => leftArrowRemoveItem(cartItem)}>&#10094;</div>
//                 <div className='value'>
//                     {quantity}
//                 </div>
//                 <div className='arrow' onClick={() => arrowAddItem(cartItem)}>&#10095;</div>
//             </span>
//             <span className='price'>{price}</span>
//             <div className='remove-button'
//                  onClick={() => clearItemFromCart(cartItem)}
//             >&#10005;</div>
//         </CheckoutItemContainer>
//     )
// };

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    arrowAddItem: item => dispatch(addItem(item)),
    leftArrowRemoveItem: item => dispatch(leftArrowRemoveItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem)
