import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import {CheckoutPageContainer, CheckoutHeader, HeaderBlock, TotalStyle, TestWarning} from './checkout.styles'

const CheckOutPage = ({cartItems, total}) => (
    
    
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
            <span>Total: ${total}</span>
        </TotalStyle>
        <TestWarning>
            *Please use the following test credit card for paiments*
            <br/>
            4242 4242 4242 4242 - exp: 01/22 - CVV: 123
        </TestWarning>
        <StripeCheckoutButton price ={total} />
    </CheckoutPageContainer>
    
    )

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})


export default connect(mapStateToProps)(CheckOutPage)