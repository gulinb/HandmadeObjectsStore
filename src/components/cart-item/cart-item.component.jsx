import React from 'react'

import {CartItemStyles, ItemDetails, Name, Image, ImageContainer} from './cart-item.styles'

const CartItem = ({element: {imageUrl, price, name, quantity}}) => (
    <CartItemStyles>
        <ImageContainer>
            <Image src={imageUrl} alt= 'element' />
        </ImageContainer>
        <ItemDetails>
            <Name>{name}</Name>
            <span className='price'>{quantity} X {price} Lei</span>
        </ItemDetails>
    </CartItemStyles>
)

export default CartItem