import React from 'react'
import {removeElement} from '../../firebase/firebase.utils'
import {CollectionItemStyles, Image, CollectionFooter, Name, Price, CustomButtonStyle, CustomButtonStyle2} from './product-item.styles'
import {withRouter} from 'react-router-dom'

const ProductItem =({element, collectionId, history, match, title}) => {

    const {name, price, imageUrl} = element
    return (
    <CollectionItemStyles>
        <Image className='image' imageUrl={imageUrl} />
        <CollectionFooter>
            <Name>{name}</Name>
            <Price>$ {price}</Price>
        </CollectionFooter>    
        <CustomButtonStyle onClick={() => history.push(`${match.url}/edit/${title}/${name}`)} inverted>Edit</CustomButtonStyle>
        <CustomButtonStyle2 onClick={() => removeElement(collectionId, element)} inverted>Remove</CustomButtonStyle2>
    </CollectionItemStyles>
    )
}

export default withRouter(ProductItem)