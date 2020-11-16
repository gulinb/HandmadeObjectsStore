import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishbleKey = 'pk_test_51HMFCsJVBOjbuYiqo5BOwY9rwbnNUTFFGYsygw7TyL0puFWQdR6WDaHpIadBWy2PN3tQ18p4xjch8PB808BCCQ5h00q3KdaWzw'


const onToken = token => {
    console.log(token)
    alert('PaymentSuccessful')
}



    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
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