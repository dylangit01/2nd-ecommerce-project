import React from "react";
// import './sign-in-and-sign-up.styles.scss'
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import {SignInAndSignUpContainer} from "./sign-in-and-sign-up.styles";

const SignInAndSignUpPage = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
);


// const SignInAndSignUpPage = () => (
//     <div className='sign-in-and-sign-up'>
//         <SignIn />
//         <SignUp />
//     </div>
// );

export default SignInAndSignUpPage
