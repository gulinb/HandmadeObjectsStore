
import ShopActionTypes from './shop.types'

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined,
    productDetails: true,
    selectedElement: {},
    orderForm: true
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case ShopActionTypes.TOGGLE_PRODUCT_DETAILS:
            return {
                ...state,
                productDetails: !state.productDetails
            }
        case ShopActionTypes.SELECTED_ELEMENT:
            return{
                ...state,
                selectedElement: action.payload
            }
        case ShopActionTypes.TOGGLE_ORDER_FORM:
            return{
                ...state,
                orderForm: !state.orderForm
            }

        default:
            return state
    }
}

export default shopReducer