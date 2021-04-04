import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {SignInStyle, Button} from './sign-in.styles'
import { getUserAdmin } from '../../mySql/mySql.utils'
import { setCurrentUser } from '../../redux/user/user.actions'
import { connect } from 'react-redux'
class SignIn extends React.Component {

    constructor(props){
        super(props)

        this.state={
            username: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const {setCurrentUser} = this.props
        const {username, password} = this.state
        const user = await getUserAdmin(username, password)
        if(user[0]){
            setCurrentUser(user[0])
        }else{
            alert('Datele introduse sunt gresite!')
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
                        name='username' 
                        type='username' 
                        value={this.state.username} required 
                        handleChange={this.handleChange}
                        label='USERNAME'
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

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  })

export default connect(null,mapDispatchToProps)(SignIn)