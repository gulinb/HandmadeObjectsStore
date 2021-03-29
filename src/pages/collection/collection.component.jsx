import React from 'react'

import CollectionItem from '../../components/collection-item/collection-item.component';
import {connect} from 'react-redux'
import {selectCollection, selectProductDetails} from '../../redux/shop/shop.selector'
import ProductDetailsDropdown from '../../components/product-details-dropdown/product-details-dropdown.component'
import './collection.styles.scss'

const CollectionPage = ({collection, productDetails}) => {
    
    const {title, elemente} = collection
    return(
         <div className='collection-page'>
             <h2 className='title'>{title.toUpperCase()}</h2>
             {
                productDetails ?
                null
                :
                <ProductDetailsDropdown />
                
                
            }
             <div className='items'>
                {
                    elemente.map(element => (<CollectionItem key={element.id} element={element} />))
                }
             </div>
          </div>
         )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
    productDetails: selectProductDetails(state)
})

export default connect(mapStateToProps)(CollectionPage)