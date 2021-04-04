import React from 'react'
import {connect} from 'react-redux'
import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions.js'
import {findElement} from '../../mySql/mySql.utils'

import {CheckoutItemStyles, ImageContainer, Image, Name, Quantity, Arrow, Value, Price, RemoveButton} from './checkout-itemstyles'

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {id, category, name, imageUrl, price, quantity} = cartItem  
    
    const handleChange = async () => {
        let dbItem = async () => { 
            const avb = await findElement(category, id)
            console.log(avb[0].quantity)
            console.log(quantity)
            if(avb[0].quantity > quantity)
            return true
            return false        
        } 
        let availability = await dbItem()
        console.log(availability)
        if(availability)
            addItem(cartItem)
    }
    
return (
    <CheckoutItemStyles>
        <ImageContainer>
            <Image src={imageUrl} alt='element' />
        </ImageContainer>
        <Name>{name}</Name>
        <Quantity>
            <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={handleChange}>&#10095;</Arrow>
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