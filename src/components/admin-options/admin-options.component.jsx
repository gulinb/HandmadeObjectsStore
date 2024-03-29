import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector } from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selector'
import {CustomButtonStyle, Menu} from './admin-options.styles'
import {withRouter} from 'react-router-dom'



class AdminOptionsMenu extends React.Component {
    


    render(){
    const {currentUser, history, match} = this.props

    return(
        currentUser ?
        <Menu>

            <CustomButtonStyle onClick={() => history.push(`${match.path}/comenzi`)}> COMENZI </CustomButtonStyle>
            <CustomButtonStyle onClick={() => history.push(`${match.path}/produse`)}> PRODUSE </CustomButtonStyle>
        </Menu>
        :
        <div>gete hell outtahere</div>
    )
    }
}


const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser
})




export default withRouter(connect(mapStateToProps)(AdminOptionsMenu))