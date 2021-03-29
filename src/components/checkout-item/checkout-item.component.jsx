import React from 'react'
import {connect} from 'react-redux'
import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions.js'

import {CheckoutItemStyles, ImageContainer, Image, Name, Quantity, Arrow, Value, Price, RemoveButton} from './checkout-itemstyles'

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
return (
    <CheckoutItemStyles>
        <ImageContainer>
            <Image src={imageUrl} alt='element' />
        </ImageContainer>
        <Name>{name}</Name>
        <Quantity>
            <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
        </Quantity>
        <Price>{price} Lei</Price>
        <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemStyles>
)
}

const mapDispatchToProps = dispatch => ({
    clearItem: element => dispatch(clearItemFromCart(element)),
    removeItem: element => dispatch(removeItem(element)),
    addItem: element => dispatch(addItem(element))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)