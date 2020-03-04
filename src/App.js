import React from 'react';
// import './App.css';
import {GlobalStyle} from "./global.styles";

import HomePage from "./pages/homepage/homepage.component";

import {Switch, Route, Redirect} from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selector";
import CheckoutPage from "./pages/checkout/checkout.component";
// import {selectCollectionsForPreview} from "./redux/shop/shop.selectors";


class App extends React.Component {

    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {  // this line is to check if any user sign in with Google
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth); // if userAuth passed, then get userRef to either check if this user exists in firebase, if not, then create this user into
                // firebase database
                userRef.onSnapshot(snapshot => {         // this line is to update application state
                    setCurrentUser({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    }, () => console.log(this.state))
                })
            } else {
                setCurrentUser(userAuth);

                // below is new function by using collectionsArray to store all shop items into firebase
                // "collections" is the ID that will be written into Firebase
                // Below deconstruct array to title and items, and return a new array with title and items only:
                // After we store the item data into firebase, we can remove below lines, so that the firebase won't store the codes twice.

               // await addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({ title, items})) )
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        const {currentUser} = this.props
        return (
            <div>
                <GlobalStyle/>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    {/*/ if path has forwarding path, it cannot be exact, as deeper path won't be rendered /*/}
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route exact path='/signin'
                        // below line means if currentUser exists, then redirect to home page, otherwise go to SignInAndSignUpPage page
                           render={() => currentUser ? <Redirect to='/'/> : <SignInAndSignUpPage/>}
                    />
                </Switch>
            </div>
        );

    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    // Below line is in order to programmatically store the collectionsArrays into firebase,
    // since we already alter the shop items to object, so we have to use "selectCollectionsForPreview" which transfer
    // Object to an array, so that we can get all arrays.

    // collectionsArray: selectCollectionsForPreview
});

// we destructor below state.user to ({user})
// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// });

// const mapStateToProps = ({user}) => ({
//     currentUser: user.currentUser
// });

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
