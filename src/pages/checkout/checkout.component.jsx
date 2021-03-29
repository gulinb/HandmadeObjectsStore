import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import {CheckoutPageContainer, CheckoutHeader, HeaderBlock, TotalStyle, CustomButtonStyles} from './checkout.styles'
import { toggleOrderForm } from '../../redux/shop/shop.actions'
import { selectOrderForm } from '../../redux/shop/shop.selector'
import OrderDropdown from '../../components/order-dropdown/order-dropdown.component'

const CheckOutPage = ({cartItems, total, showOrderForm, orderForm}) => (
    
    
    <CheckoutPageContainer>
        <CheckoutHeader>
            <HeaderBlock>
                Product
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        {
            cartItems.map( cartItem => 
                    <CheckoutItem key={cartItem.name} cartItem={cartItem} />
                )
        }
        <TotalStyle>
            <span>Total: {total} Lei</span>
        </TotalStyle>
        <CustomButtonStyles onClick={() => showOrderForm()}> Comanda !</CustomButtonStyles>
        {
            orderForm ?
            null
            :
            <OrderDropdown />
        }
    </CheckoutPageContainer>
    
    )

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    orderForm: selectOrderForm
})

const mapDispatchToProps = dispatch => ({
    showOrderForm: () => dispatch(toggleOrderForm())
})


export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage)