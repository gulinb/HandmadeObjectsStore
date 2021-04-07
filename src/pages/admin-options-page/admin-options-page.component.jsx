import React from 'react'

import './admin-options-page.styles'
import {Route} from 'react-router-dom'
import AddEditPage from '../../pages/add-edit-products-page/add-edit-products-page.component'

import {connect} from 'react-redux' 
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selector'
import AdminComenziPage from '../admin-comenzi-page/admin-comenzi-page.component'


class AdminOptionsPage extends React.Component{ 



    render(){

        const {currentUser, match} = this.props
        return(

            currentUser ?
            <div>
            <Route path={`${match.path}/comenzi`} component={AdminComenziPage}/>
            <Route path={`${match.path}/produse`} component={AddEditPage} />
            </div>
            :
            <h1>You are not logged in! You are not supposed to be here!</h1>
            )   
    
    }
} 
        
        const mapStateToProps = createStructuredSelector ({
            currentUser: selectCurrentUser
        })
        

        

    
export default connect(mapStateToProps)(AdminOptionsPage)