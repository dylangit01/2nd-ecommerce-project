import React from "react";

import {connect} from 'react-redux'
// import {createStructuredSelector} from "reselect";
// import {shopSelectorCollections} from "../../redux/shop/shop.selectors";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import {Route} from 'react-router-dom'
import CollectionPage from "../collection/collection.component";
import {firestore} from '../../firebase/firebase.utils';
import {convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {updateCollections} from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections');

        // Promise Pattern
        collectionRef.get().then(snapshot => {
            // console.log(snapshot)
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            console.log(collectionsMap);
            updateCollections(collectionsMap);

            this.setState({loading: false});
        })

        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        //     // console.log(snapshot)
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     console.log(collectionsMap);
        //     updateCollections(collectionsMap);
        //
        //     this.setState({loading: false})
        // })
    }

    render() {
        const {match} = this.props;
        const {loading} = this.state
        console.log(match);
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}/>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}/>
            </div>
        );
    }
}


// const ShopPage = ({match}) => {
//     console.log(match);
//     return (
//         <div className='shop-page'>
//             <Route exact path={`${match.path}`} component={CollectionOverview}/>
//             <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
//         </div>
//     );
// };

// Since we created Collection-overview component, ShopPage is just a single viewing component
// const mapStateToProps = state => ({
//     collections: state.shop.collections
// });

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage)


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
