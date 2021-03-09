import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import './admin-page-login.styles.scss'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selector'
import {connect} from 'react-redux'
import AdminOptionsMenu from '../../components/admin-options/admin-options.component'





class SignInPage extends React.Component { 
    
    
    render(){
        const {currentUser} = this.props

    return(
        <div>
        {
                currentUser ? 
                <div>
                    <AdminOptionsMenu />
                    </div>
                    :
                    <div className='sign-in'>
                    <SignIn />
                    </div>
                }
                
                </div>
    )
}
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(SignInPage)