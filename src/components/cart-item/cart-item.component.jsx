import React from "react";
// import './cart-item.styles.scss'
import {CartItemContainer, ImgContainer, ItemDetailsContainer, NameContainer} from "./cart-item.styles";

const CartItem = ({item: {name, price, imageUrl, quantity}}) => (
    <CartItemContainer>
        <ImgContainer src={imageUrl} alt="item"/>
        <ItemDetailsContainer>
            <NameContainer>{name}</NameContainer>
            <span> {quantity} * ${price} </span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem
