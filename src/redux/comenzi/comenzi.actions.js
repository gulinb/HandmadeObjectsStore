import { getComenzi, getComenziProduse } from '../../mySql/mySql.utils'
import ComenziActionTypes from './comenzi.types'


export const fetchComenziNoi = comenziNoi => ({
    type: ComenziActionTypes.FETCH_COMENZINOI,
    payload: comenziNoi
})

export const fetchComenziProcesate = comenziProcesate => ({
    type: ComenziActionTypes.FETCH_COMENZIPROCESATE,
    payload: comenziProcesate
})

export const fetchComenziProduse = comenziProduse => ({
    type: ComenziActionTypes.FETCH_COMENZIPRODUSE,
    payload: comenziProduse
})

export const fetchComenziStartAsync = () => {
    return async dispatch => {
            

            const comenzi = await getComenzi()
            const comenziProduse = await getComenziProduse()

            const comenziNoi = comenzi.filter(comanda => !comanda.comandaProcesata)
            
            const comenziProcesate = comenzi.filter(comanda => comanda.comandaProcesata)

            dispatch(fetchComenziProduse(comenziProduse))
            dispatch(fetchComenziNoi(comenziNoi))
            dispatch(fetchComenziProcesate(comenziProcesate))
}
}
