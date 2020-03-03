import React from "react";
// import './collection-item.styles.scss'
// import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.actitons";

import {AddItemButton, CollectionFooterContainer, CollectionFooterName, CollectionFooterPrice, CollectionItemContainer, ImageContainer} from "./collection-item.styles";

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <CollectionItemContainer>
            <ImageContainer className='image' imageUrl={imageUrl} />

            <CollectionFooterContainer>
                <CollectionFooterName>{name}</CollectionFooterName>
                <CollectionFooterPrice>{price}</CollectionFooterPrice>
            </CollectionFooterContainer>
            <AddItemButton onClick={()=> addItem(item)} inverted >
                ADD TO CART
            </AddItemButton>
        </CollectionItemContainer>
    )
};


// Original codes with scss:
// const CollectionItem = ({item, addItem}) => {
//     const {name, price, imageUrl} = item;
//     return (
//         <div className='collection-item'>
//             <div className='image'
//                  style={{backgroundImage: `url(${imageUrl})`}}
//             />
//             <div className='collection-footer'>
//                 <span className='name'>{name}</span>
//                 <span className='price'>{price}</span>
//             </div>
//             <CustomButton onClick={()=> addItem(item)} inverted >
//                 ADD TO CART
//             </CustomButton>
//         </div>
//     )
// };


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem)
