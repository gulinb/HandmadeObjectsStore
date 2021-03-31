import React from 'react'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {CartItemsStyles, EmptyMessage, Total} from './detalii-comanda.styles'

const DetaliiComanda = ({cartItems, total}) => {

    console.log(cartItems)

    return(
    <CartItemsStyles>
            <h2> COMANDA :</h2>
            {
                cartItems.length
                ? (cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} element={cartItem} />
                )))
                : 
                <EmptyMessage>Your cart is empty</EmptyMessage>
            }
            <Total>Total : {total+20} Lei</Total>
        </CartItemsStyles>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total: selectCartTotal
})

export default withRouter(connect(mapStateToProps)(DetaliiComanda))