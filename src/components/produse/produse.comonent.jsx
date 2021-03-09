
import React from 'react'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selector'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector'
import {connect} from 'react-redux'

import ProductCategory from '../product-category-admin/product-category-admin.component'


import './produse.styles'

class Produse extends React.Component {



    render(){
        const { currentUser, collections} = this.props
        return( 

            currentUser 
            ? 
          <div>
          {
            collections.map(collection => <ProductCategory key={collection.id} collection={collection} />)
          }
          </div>
            :
            null  
        )
    }
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    collections: selectCollectionsForPreview 
})



export default connect(mapStateToProps)(Produse)