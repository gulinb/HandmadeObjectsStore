import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import userReducer from '../redux/user/user.reducer'
import cartReducer from '../redux/cart/cart.reducer'
import storage from 'redux-persist/lib/storage'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'
import comenziReducer from './comenzi/comenzi.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart','user']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    comenzi: comenziReducer
})

export default persistReducer(persistConfig, rootReducer)