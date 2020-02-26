import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";

import {Switch, Route} from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import {auth, createUserProfileDocument} from './firebase/firebase.utils'



class App extends React.Component{
    constructor(props) {
       super(props);

       this.state = {
           currentUser: null
       }
   }

   unsubscribeFromAuth = null

   componentDidMount() {
       this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {  // this line is to check if any user sign in with Google
         if(userAuth) {
             const userRef = await createUserProfileDocument(userAuth); // if userAuth passed, then get userRef to either check if this user exists in firebase, if not, then create this user into
                                                                         // firebase database
             userRef.onSnapshot(snapshot => {         // this line is to update application state
                this.setState({
                    currentUser: {
                        id: snapshot.id,
                        ...snapshot.data()
                    }
                }, ()=> console.log(this.state))
             })
         } else {
             this.setState({currentUser: userAuth})
         }
        })
   }

   componentWillUnmount() {
        this.unsubscribeFromAuth()
   }


    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}  />
                    <Route exact path='/shop' component={ShopPage} />
                    <Route exact path='/signin' component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );

    }
}

export default App;
