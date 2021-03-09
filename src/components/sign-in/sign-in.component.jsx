import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {SignInStyle, Button} from './sign-in.styles'
import {auth} from '../../firebase/firebase.utils'

class SignIn extends React.Component {

    constructor(props){
        super(props)

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const {email, password} = this.state

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password:''})
        }catch(error){
            console.log(error)
        }
    }

    handleChange = event => {

        const {value, name} = event.target

        this.setState({[name]: value})
    }

    render(){
        return(
            <SignInStyle>
                <h2>Logare panou administrator</h2>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} required 
                        handleChange={this.handleChange}
                        label='EMAIL'
                    />
                    
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} required 
                        handleChange={this.handleChange}
                        label='PASSWORD'
                    />
                    
                    <Button>
                    <CustomButton type='submit'>Log In</CustomButton>
                    </Button>
                </form>
            </SignInStyle>

        )
    }
}

export default SignIn