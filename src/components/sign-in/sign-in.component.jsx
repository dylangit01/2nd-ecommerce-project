import React from "react";
// import './sign-in.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, sigInWithGoogle} from "../../firebase/firebase.utils";
import {ButtonsBarContainer, SignInContainer, SignInTitle} from "./sign-in.styles";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        } catch (e) {
           console.log(e)
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    };

    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label='email'
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label='password'
                    />

                    <ButtonsBarContainer>
                        <CustomButton type="submit">Sign in </CustomButton>

                        <CustomButton onClick={sigInWithGoogle} isGoogleSignin>
                            Sign in With Google
                        </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }

    // render() {
    //     return (
    //         <div className='sign-in'>
    //             <h2 className='title'>I already have an account</h2>
    //             <span>Sign in with your email and password</span>
    //
    //             <form onSubmit={this.handleSubmit}>
    //                 <FormInput
    //                     name='email'
    //                     type='email'
    //                     value={this.state.email}
    //                     required
    //                     handleChange={this.handleChange}
    //                     label='email'
    //                 />
    //                 <FormInput
    //                     name='password'
    //                     type='password'
    //                     value={this.state.password}
    //                     required
    //                     handleChange={this.handleChange}
    //                     label='password'
    //                 />
    //
    //                 <div className='buttons'>
    //                     <CustomButton type="submit">Sign in </CustomButton>
    //
    //                     <CustomButton onClick={sigInWithGoogle} isGoogleSignin>
    //                         Sign in With Google
    //                     </CustomButton>
    //                 </div>
    //             </form>
    //         </div>
    //     )
    // }
}

export default SignIn
