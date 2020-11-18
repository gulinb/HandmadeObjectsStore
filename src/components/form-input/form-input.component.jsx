import React from 'react'

import {GroupContainer, FormInputStyle, LabelStyle} from './form-input.styles'

const FormInput = ({handleChange, label, ...otherProps}) => (

    <GroupContainer>
        <FormInputStyle onChange={handleChange} {...otherProps}/>
        {
            label ?
            (<LabelStyle className={otherProps.value.length ? 'shrink' : ''}>
            {label}    
            </LabelStyle>)
            : null
        }
    </GroupContainer>
)

export default FormInput