import React from "react";
import './header.styles.scss'

import {Link} from "react-router-dom";

import {ReactComponent as Logo } from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils";

import {connect} from 'react-redux'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {selectCartHidden} from "../../redux/cart/cart.selector";
import {createStructuredSelector} from "reselect";

const Header =({currentUser, hidden}) => (
    <div className='header'>
       <Link className='logo-container' to='/'>
           <Logo className='logo' />
       </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                    :
                    <Link to='/signin' >SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropdown/>
        }
    </div>
);

// original codes, so we can destruct it as below:
// const mapStateToProps = (state) => ({
//     currentUser: state.user.currentUser,
//     hidden: state.cart.hidden
// });

// since we have select, we use select codes as below again:
// const mapStateToProps = ({ user: {currentUser}, cart: {hidden} }) => ({
//     currentUser,
//     hidden
// });

// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// });

// We can use createStructuredSelector method to replace the (state):
const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header)
