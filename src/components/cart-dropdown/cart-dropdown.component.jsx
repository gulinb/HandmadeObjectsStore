import React from 'react'

import { selectCartItems } from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import {CartDropdownStyles, CartItemsStyles, EmptyMessage} from './cart-dropdown.styles'

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropdownStyles>
        <CartItemsStyles>
            {
                cartItems.length
                ? (cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} element={cartItem} />
                )))
                : <EmptyMessage>Your cart is empty</EmptyMessage>
            }
        </CartItemsStyles>
        <CustomButton
            onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>
            GO TO CHECKOUT
        </CustomButton>
    </CartDropdownStyles>
)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))