import React from 'react'
import {connect} from 'react-redux'

import { selectCartItemsCount } from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'
import {toggleCartHidden} from '../../redux/cart/cart.actions'



import {CartIconStyles, ItemCount, ShoppingIconStyles} from './cart-icon.styles'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconStyles onClick={toggleCartHidden}>
        <ShoppingIconStyles />
        <ItemCount>{itemCount}</ItemCount>
    </CartIconStyles>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)(CartIcon)