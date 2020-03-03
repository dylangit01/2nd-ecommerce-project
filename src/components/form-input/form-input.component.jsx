import React from "react";

import {FormInputContainer, FormInputLabel, GroupContainer} from "./form-input.styles";
// import './form-input.styles.scss'

const FormInput = ({handleChange, label, ...otherProps}) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...otherProps}/>
        {
            label ?
                <FormInputLabel className= {otherProps.value.length ? 'shrink' : ''}>
                    {label}
                </FormInputLabel>
                :
                null
        }
    </GroupContainer>
);

// const FormInput = ({handleChange, label, ...otherProps}) => (
//     <div className='group'>
//         <input className='form-input' onChange={handleChange} {...otherProps}/>
//         {
//             label ?
//                 <label className={`${otherProps.value.length ? 'shrink' : ''}  form-input-label`}>
//                     {label}
//                 </label>
//                 :
//                 null
//         }
//     </div>
// );

export default FormInput
