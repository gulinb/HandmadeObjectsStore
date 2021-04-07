import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector } from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selector'
import {CustomButtonStyle, Menu} from './admin-comenzi-options.styles'
import {withRouter} from 'react-router-dom'



class AdminComenziMenu extends React.Component {
    


    render(){
    const {currentUser, history, match} = this.props

    return(
        currentUser ?
        <Menu>

            <CustomButtonStyle onClick={() => history.push(`${match.path}/comenziNoi`)}> COMENZI NOI </CustomButtonStyle>
            <CustomButtonStyle onClick={() => history.push(`${match.path}/comenziProcesate`)}> COMENZI PROCESATE </CustomButtonStyle>
        </Menu>
        :
        <div>gete hell outtahere</div>
    )
    }
}


const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser
})




export default withRouter(connect(mapStateToProps)(AdminComenziMenu))