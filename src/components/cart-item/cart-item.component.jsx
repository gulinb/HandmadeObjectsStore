import React from 'react'

import {CartItemStyles, ItemDetails, Name, Image} from './cart-item.styles'

const CartItem = ({element: {imageUrl, price, name, quantity}}) => (
    <CartItemStyles>
        <Image src={imageUrl} alt= 'element' />
        <ItemDetails>
            <Name>{name}</Name>
            <span className='price'>{quantity} X ${price}</span>
        </ItemDetails>
    </CartItemStyles>
)

export default CartItem