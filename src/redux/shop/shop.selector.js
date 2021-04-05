import {createSelector} from 'reselect'

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
)


export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => shop.collections ? true : false
)

export const selectProductDetails = createSelector(
    [selectShop],
    shop => shop.productDetails
)

export const selectElement = createSelector(
    [selectShop],
    shop => shop.selectedElement
)

export const selectOrderForm = createSelector(
    [selectShop],
    shop => shop.orderForm
)

export const selectShowMessage = createSelector(
    [selectShop],
    shop => shop.showMessage
)

export const selectMessage = createSelector(
    [selectShop],
    shop => shop.message
)