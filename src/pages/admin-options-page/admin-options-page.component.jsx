import React from 'react'

import './admin-options-page.styles'
import ComenziNoi from '../../components/comenzi-noi/comenzi-noi.component'
import {Route} from 'react-router-dom'
import ComenziProcesate from '../../components/comenzi-procesate/comenzi-procesate.component'
import AddEditPage from '../../pages/add-edit-products-page/add-edit-products-page.component'

import {connect} from 'react-redux' 
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selector'


class AdminOptionsPage extends React.Component{ 

    render(){

        const {currentUser, match} = this.props
        return(

            currentUser ?
            <div>
            <Route exact path={`${match.path}/comenzinoi`} component={ComenziNoi}/>
            <Route path={`${match.path}/comenziprocesate`} component={ComenziProcesate}/>
            <Route path={`${match.path}/produse`} component={AddEditPage} />
            </div>
            :
            <h1>getta hell outta here</h1>
            )   
    
    }
} 
        
        const mapStateToProps = createStructuredSelector ({
            currentUser: selectCurrentUser
        })
        

        

    
export default connect(mapStateToProps)(AdminOptionsPage)