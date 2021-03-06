import React from "react";
// import './sign-up.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import {SignUpContainer, SignUpTitle} from "./sign-up.styles";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword) {
            alert('Password don\'t match');
            return
        }
        else if (password.length < 6) {
            alert('Password should be at least 6 characters');
            return
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (e) {
            console.log(e.message)
        }
    };

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value})
    };

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <SignUpContainer>
                <SignUpTitle>I do not have an account</SignUpTitle>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        value={displayName}
                        handleChange={this.handleChange}
                        required
                        label='Display Name'
                    />
                    <FormInput
                        name='email'
                        type='email'
                        value={email}
                        handleChange={this.handleChange}
                        required
                        label='email'
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={this.handleChange}
                        required
                        label='password'
                    />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        required
                        label='Confirm Password'
                    />
                    {/*// Notice!!! below submit button has to be placed into the form tag!!!*/}
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN UP</CustomButton>
                    </div>
                </form>
            </SignUpContainer>
        )
    }


    // render() {
    //     const {displayName, email, password, confirmPassword} = this.state
    //     return (
    //         <div className='sign-up'>
    //             <h2 className='title'>I do not have an account</h2>
    //             <span>Sign up with your email and password</span>
    //
    //             <form className='sign-up-form' onSubmit={this.handleSubmit}>
    //                 <FormInput
    //                     name='displayName'
    //                     type='text'
    //                     value={displayName}
    //                     handleChange={this.handleChange}
    //                     required
    //                     label='Display Name'
    //                 />
    //                 <FormInput
    //                     name='email'
    //                     type='email'
    //                     value={email}
    //                     handleChange={this.handleChange}
    //                     required
    //                     label='email'
    //                 />
    //                 <FormInput
    //                     name='password'
    //                     type='password'
    //                     value={password}
    //                     handleChange={this.handleChange}
    //                     required
    //                     label='password'
    //                 />
    //                 <FormInput
    //                     name='confirmPassword'
    //                     type='password'
    //                     value={confirmPassword}
    //                     handleChange={this.handleChange}
    //                     required
    //                     label='Confirm Password'
    //                 />
    //                 {/*// Notice!!! below submit button has to be placed into the form tag!!!*/}
    //                 <div className='buttons'>
    //                     <CustomButton type='submit'>SIGN UP</CustomButton>
    //                 </div>
    //             </form>
    //         </div>
    //     )
    // }
}

export default SignUp
