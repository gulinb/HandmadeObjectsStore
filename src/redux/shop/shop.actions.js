import { getAllCollections } from '../../mySql/mySql.utils'
import ShopActionTypes from './shop.types'

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = error => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
})

export const fetchCollectionsStartAsync = () => {
    return async dispatch => {
        dispatch(fetchCollectionsStart())

            const collectionsMap = await getAllCollections()

            dispatch(fetchCollectionsSuccess(collectionsMap))
}
}


export const toggleProductDetails = () => ({
    type: ShopActionTypes.TOGGLE_PRODUCT_DETAILS
})

export const selectElement = element => ({
    type: ShopActionTypes.SELECTED_ELEMENT,
    payload: element
})

export const toggleOrderForm = () => ({
    type: ShopActionTypes.TOGGLE_ORDER_FORM
})

export const toggleMessage = () => ({
    type: ShopActionTypes.TOGGLE_MESSAGE
})

export const defineMessage = message => ({
    type: ShopActionTypes.MESSAGE_MESSAGE,
    payload: message
})

export const setTransactionId = id => ({
    type: ShopActionTypes.SET_TRANSACTIONID,
    payload: id
})