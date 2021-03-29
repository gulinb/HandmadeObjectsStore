import React from 'react'
import {removeElement} from '../../mySql/mySql.utils'
import {CollectionItemStyles, Image, CollectionFooter, Name, Price, CustomButtonStyle, CustomButtonStyle2} from './product-item.styles'
import {withRouter} from 'react-router-dom'

const ProductItem =({element, collectionId, history, match, title}) => {

    const {id, name, price, imageUrl} = element
    return (
    <CollectionItemStyles>
        <Image className='image' imageUrl={imageUrl} />
        <CollectionFooter>
            <Name>{name}</Name>
            <Price>{price} Lei</Price>
        </CollectionFooter>    
        <CustomButtonStyle onClick={() => history.push(`${match.url}/edit/${title}/${id}`)} inverted>Edit</CustomButtonStyle>
        <CustomButtonStyle2 onClick={async () => await removeElement(collectionId, element)} inverted>Remove</CustomButtonStyle2>
    </CollectionItemStyles>
    )
}

export default withRouter(ProductItem)