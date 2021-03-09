import { convertCollectionsSnapShotToMap, firestore } from '../../firebase/firebase.utils'
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
    return dispatch => {
        const collectionRef = firestore.collection('produse')
        dispatch(fetchCollectionsStart())

        collectionRef.get().then(snapShot => {
            const collectionsMap = convertCollectionsSnapShotToMap(snapShot)
            dispatch(fetchCollectionsSuccess(collectionsMap))
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}

export const toggleProductDetails = () => ({
    type: ShopActionTypes.TOGGLE_PRODUCT_DETAILS
})

export const selectElement = element => ({
    type: ShopActionTypes.SELECTED_ELEMENT,
    payload: element
})