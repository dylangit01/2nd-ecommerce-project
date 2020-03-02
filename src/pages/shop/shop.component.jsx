import React from "react";
// import CollectionPreview from "../../components/collection-preview/collection-preview.component";

// import {connect} from 'react-redux'
// import {createStructuredSelector} from "reselect";
// import {shopSelectorCollections} from "../../redux/shop/shop.selectors";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import {Route} from 'react-router-dom'
import CollectionPage from "../collection/collection.component";

const ShopPage = ({match}) => {
    console.log(match);
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    );
};

// Since we created Collection-overview component, ShopPage is just a single viewing component without
// const mapStateToProps = state => ({
//     collections: state.shop.collections
// });

export default ShopPage






// Original codes as below:
// class ShopPage extends React.Component{
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             collections: SHOP_DATA
//         }
//     }
//
//     render() {
//         const {collections} = this.state
//         return (
//             <div className='shop-page'>
//                 {
//                     collections.map(({id, ...otherCollectionProps})=> (
//                         <CollectionPreview key={id} {...otherCollectionProps} />
//                     ))
//                 }
//             </div>
//         )
//     }
// }
//
// export default ShopPage
