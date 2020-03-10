import React from "react";
import {SpinnerContainer, SpinnerOverlay} from "./with-spinner.styles";

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        )
        :
        <WrappedComponent {...otherProps} />
};

// or we can write like below:
// const WithSpinner = WrappedComponent => {
//     const Spinner = ({isLoading, ...otherProps}) => {
//         return isLoading ?
//             <SpinnerOverlay>
//                 <SpinnerContainer/>
//             </SpinnerOverlay>
//             :
//             <WrappedComponent {...otherProps} />
//     };
//     return Spinner;
// };

export default WithSpinner


