import React from 'react'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'
import './add-edit-products-page.styles'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selector'
import AddProduct from '../../components/add-product/add-product.component'
import Produse from '../../components/produse/produse.comonent'
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions'
import EditProductContainer from '../../components/edit-product/edit-product.container'

class AddEditPage extends React.Component {

    componentDidMount(){
        const { fetchCollectionsStartAsync } = this.props
        fetchCollectionsStartAsync()
    }


    render(){

        const {currentUser, match} = this.props

        return(
            currentUser ?
            <div>
                <Route exact path={`${match.path}`} component={Produse}/>
                <Route exact path={`${match.path}/add/:collectionId`} component={AddProduct}/>
                <Route path={`${match.path}/edit/:collectionId/:elementId`} component={EditProductContainer}/>
            </div>
            :
            <h1>getta hell outta here</h1>
        )
}
}


const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})
    
export default connect(mapStateToProps, mapDispatchToProps)(AddEditPage)