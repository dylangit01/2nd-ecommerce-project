import React from "react";
// import './custom-button.styles.scss'
import './custom-button.styles'
import {CustomButtonContainer} from "./custom-button.styles";

const CustomButton = ({children, ...props}) => (
    <CustomButtonContainer {...props} >
        {children}
    </CustomButtonContainer>
);

// const CustomButton = ({children, isGoogleSignin, inverted, ...otherProps}) => (
//     <button className={`
//     ${inverted ? 'inverted' : ''}
//     ${isGoogleSignin ? 'google-sign-in' : ''}
//     custom-button`} {...otherProps} >
//         {children}
//     </button>
// );

export default CustomButton


