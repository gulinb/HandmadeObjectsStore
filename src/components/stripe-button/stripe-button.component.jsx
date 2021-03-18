import React from 'react'
//import {config} from '../../config/config'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishbleKey = process.env.STRIPE_SECRET_KEY


const onToken = token => {
    console.log(token)
    alert('PaymentSuccessful')
}



    return (
        <StripeCheckout
            label='Pay Now'
            name='Orfevru'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishbleKey}
            />
    )
}

export default StripeCheckoutButton