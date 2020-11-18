import React from 'react'
import {connect} from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

import {CollectionItemStyles, Image, CollectionFooter, Name, Price, CustomButtonStyle} from './collection-item.styles'

const CollectionItem =({item , addItem}) => {

    const {name, price, imageUrl} = item
    return (
    <CollectionItemStyles>
        <Image className='image' imageUrl={imageUrl} />
        <CollectionFooter>
            <Name>{name}</Name>
            <Price>$ {price}</Price>
        </CollectionFooter>    
        <CustomButtonStyle onClick={() => addItem(item)} inverted>Add to Cart</CustomButtonStyle>
    </CollectionItemStyles>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)