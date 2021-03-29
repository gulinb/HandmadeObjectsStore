

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.name === cartItemToAdd.name)

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.name === cartItemToAdd.name
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItem = (cartItems, CartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.name === CartItemToRemove.name)

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.name !== CartItemToRemove.name)
    }else{
        return cartItems.map(cartItem => cartItem.name === CartItemToRemove.name ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
    }
}

