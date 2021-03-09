import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import {selectCollectionsForPreview, selectProductDetails} from '../../redux/shop/shop.selector'

import ProductDetailsDropdown from '../../components/product-details-dropdown/product-details-dropdown.component'



import {CollectionOverviewContainer} from './collection-overview.styles'


const CollectionsOverview = ({collections, productDetails}) => (
    <CollectionOverviewContainer>
    {
        productDetails ?
        null
        :
        <ProductDetailsDropdown />
        
        
    }
         {collections.map(({id, ...otherCollectionProps}) => (
             <CollectionPreview key={id} {...otherCollectionProps} />
         ))}
    </CollectionOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
    productDetails: selectProductDetails
})

export default connect(mapStateToProps)(CollectionsOverview)