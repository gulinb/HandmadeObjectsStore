import React from 'react'

import './admin-options-page.styles'
import ComenziNoi from '../../components/comenzi-noi/comenzi-noi.component'
import {Route} from 'react-router-dom'
import ComenziExpediate from '../../components/comenzi-expediate/comenzi-expediate.component'

import {connect} from 'react-redux' 
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selector'

const AdminOptionsPage = ({currentUser, match}) => (

    currentUser ?
    <div>
    <Route path={`${match.path}/comenzinoi`} component={ComenziNoi}/>
    <Route path={`${match.path}/comenziexpediate`} component={ComenziExpediate}/>
    
    </div>
    :
    <h1>getta hell outta here</h1>
    )

    const mapStateToProps = createStructuredSelector ({
        currentUser: selectCurrentUser
    })
    
export default connect(mapStateToProps)(AdminOptionsPage)