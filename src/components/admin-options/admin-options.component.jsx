import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector } from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selector'
import {CustomButtonStyle, Menu} from './admin-options.styles'
import {withRouter} from 'react-router-dom'
import { fetchComenziStartAsync } from '../../redux/comenzi/comenzi.actions'



class AdminOptionsMenu extends React.Component {
    
    componentDidMount(){
        const { fetchComenziStartAsync } = this.props
        fetchComenziStartAsync()
    }

    render(){
    const {currentUser, history, match} = this.props

    return(
        currentUser ?
        <Menu>
            <CustomButtonStyle onClick={() => history.push(`${match.path}/options/comenzinoi`)}> COMENZI NOI </CustomButtonStyle>
         <CustomButtonStyle onClick={() => history.push(`${match.path}/options/comenziprocesate`)}> COMENZI PROCESATE </CustomButtonStyle>
            <CustomButtonStyle onClick={() => history.push(`${match.path}/options/produse`)}> PRODUSE </CustomButtonStyle>
        </Menu>
        :
        <div>gete hell outtahere</div>
    )
    }
}


const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser
})


const mapDispatchToProps = dispatch => ({
    fetchComenziStartAsync: () => dispatch(fetchComenziStartAsync())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminOptionsMenu))