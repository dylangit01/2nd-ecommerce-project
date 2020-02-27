import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";

import {Switch, Route, Redirect} from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";


class App extends React.Component {

    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props
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
                setCurrentUser(userAuth)
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }


    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/shop' component={ShopPage}/>
                    <Route exact path='/signin'
                           // below line means if currentUser exists, then redirect to home page, otherwise go to SignInAndSignUpPage page
                           render={() => this.props.currentUser ? <Redirect to='/'/> : <SignInAndSignUpPage/>}
                    />
                </Switch>
            </div>
        );

    }
}

// we destructor below state.user to ({user})
// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// });

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
