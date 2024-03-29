import ComenziActionTypes from './comenzi.types'

const INITIAL_STATE = {
    comenziNoi: null,
    comenziProcesate: null,
    comenziProduse: null
}

const comenziReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ComenziActionTypes.FETCH_COMENZINOI:
            return {
                ...state,
                comenziNoi: action.payload
            }
        case ComenziActionTypes.FETCH_COMENZIPROCESATE:
            return {
                ...state,
                comenziProcesate: action.payload
            }
        case ComenziActionTypes.FETCH_COMENZIPRODUSE:
            return {
                ...state,
                comenziProduse: action.payload
            }
        default:
            return state
    }
}

export default comenziReducer