import React from 'react'
import {connect} from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'
import { toggleProductDetails, selectElement } from '../../redux/shop/shop.actions'


import {CollectionItemStyles, Image, CollectionFooter, Name, Price, CustomButtonStyle} from './collection-item.styles'

const CollectionItem =({element , addItem, showDetails, selectElement}) => {

    const {name, price, imageUrl} = element
    return (
    <CollectionItemStyles>
        <Image className='image' imageUrl={imageUrl} onClick={() => {showDetails(); selectElement(element)}} />
        
        <CollectionFooter>
            <Name>{name}</Name>
            <Price>{price} Lei</Price>
        </CollectionFooter>    
        <CustomButtonStyle onClick={() => addItem(element)} inverted>Add to Cart</CustomButtonStyle>
    </CollectionItemStyles>
    )
}


const mapDispatchToProps = dispatch => ({
    addItem: element => dispatch(addItem(element)),
    showDetails: () => dispatch(toggleProductDetails()),
    selectElement: element => dispatch(selectElement(element))
})

export default connect(null, mapDispatchToProps)(CollectionItem)