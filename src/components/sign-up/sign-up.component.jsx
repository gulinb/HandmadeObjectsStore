import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

import { SignUpStyle, TitleStyle, FormSpan} from './sign-up.styles'

class SignUp extends React.Component{

    constructor(){
        super()

        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const {displayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword){
            alert("passwords don't match")
            return
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(error){
            console.error(error)
        }
    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({[name]: value})
    }


    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <SignUpStyle>
                <TitleStyle>I do not have an account</TitleStyle>
                <FormSpan>Sign up with your email and password</FormSpan>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName} required
                        handleChange={this.handleChange}
                        label='Display Name'
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email} required
                        handleChange={this.handleChange}
                        label='Email'
                        
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password} required
                        handleChange={this.handleChange}
                        label='Password'
                        
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword} required
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        
                    />
                    <CustomButton type='submit'>SIGN UP </CustomButton>
                </form>
            </SignUpStyle>
        )
    }

}

export default SignUp