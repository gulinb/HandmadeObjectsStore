import React from 'react'

import ComenziNoi from '../../components/comenzi-noi/comenzi-noi.component'
import {Route} from 'react-router-dom'
import ComenziProcesate from '../../components/comenzi-procesate/comenzi-procesate.component'

import {connect} from 'react-redux' 
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selector'
import { fetchComenziStartAsync } from '../../redux/comenzi/comenzi.actions'
import AdminComenziOptions from '../../components/admin-comenzi-options/admin-comenzi-options.component'


class AdminComenziPage extends React.Component{ 

    componentDidMount(){
        const { fetchComenziStartAsync } = this.props
        fetchComenziStartAsync()
    }

    render(){

        const {currentUser, match} = this.props
        return(

            currentUser ?
            <div>
            <Route exact path={`${match.path}`} component={AdminComenziOptions}/>
            <Route path={`${match.path}/comenziNoi`} component={ComenziNoi}/>
            <Route path={`${match.path}/comenziProcesate`} component={ComenziProcesate}/>
            </div>
            :
            <h1>You are not logged in! You are not supposed to be here!</h1>
            )   
    
    }
} 
        
        const mapStateToProps = createStructuredSelector ({
            currentUser: selectCurrentUser
        })

        const mapDispatchToProps = dispatch => ({
            fetchComenziStartAsync: () => dispatch(fetchComenziStartAsync())
        })
        

    
export default connect(mapStateToProps, mapDispatchToProps)(AdminComenziPage)