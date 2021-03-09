import React from 'react'

import './product-list-item-admin.styles'

const ProductList = ({element}) => {
    const {imageUrl, name, price , quantity} = element

    return(
        <div>
            <img src={imageUrl} alt='element' />
            <h3>{name}</h3>
            <h3>{price}</h3>
            <h3>{quantity}</h3>
        </div>
    )
}

export default ProductList