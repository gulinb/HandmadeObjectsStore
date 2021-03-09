import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector } from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selector'
import {CustomButtonStyle, Menu} from './admin-options.styles'
import {withRouter} from 'react-router-dom'



const AdminOptionsMenu = ({currentUser, history, match}) => (

    currentUser ?
    <Menu>
        <CustomButtonStyle onClick={() => history.push(`${match.path}/options/comenzinoi`)}> COMENZI NOI </CustomButtonStyle>
        <CustomButtonStyle onClick={() => history.push(`${match.path}/options/comenziexpediate`)}> COMENZI EXPEDIATE </CustomButtonStyle>
        <CustomButtonStyle onClick={() => history.push(`${match.path}/options/produse`)}> PRODUSE </CustomButtonStyle>
    </Menu>
    :
    <div>gete hell outtahere</div>
)


const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser
})

export default withRouter(connect(mapStateToProps)(AdminOptionsMenu))