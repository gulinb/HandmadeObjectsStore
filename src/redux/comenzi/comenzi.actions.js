import { getComenzi } from '../../mySql/mySql.utils'
import ComenziActionTypes from './comenzi.types'


export const fetchComenziNoi = comenziNoi => ({
    type: ComenziActionTypes.FETCH_COMENZINOI,
    payload: comenziNoi
})

export const fetchComenziProcesate = comenziProcesate => ({
    type: ComenziActionTypes.FETCH_COMENZIPROCESATE,
    payload: comenziProcesate
})

export const fetchComenziStartAsync = () => {
    return async dispatch => {
            

            const comenzi = await getComenzi()
            console.log('comenzi: '+comenzi)
            const comenziNoi = comenzi.filter(comanda => !comanda.comandaProcesata)
            
            const comenziProcesate = comenzi.filter(comanda => comanda.comandaProcesata)

            dispatch(fetchComenziNoi(comenziNoi))
            dispatch(fetchComenziProcesate(comenziProcesate))
}
}
