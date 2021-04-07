import {createSelector} from 'reselect'

const selectComenzi = state => state.comenzi

export const selectComenziNoi = createSelector(
    [selectComenzi],
    comenzi => comenzi.comenziNoi
)

export const selectComenziNoiForPreview = createSelector(
    [selectComenziNoi],
    comenziNoi => comenziNoi ? Object.keys(comenziNoi).map(key => comenziNoi[key]) : []
)

export const selectComenziProcesate = createSelector(
    [selectComenzi],
    comenzi => comenzi.comenziProcesate
)

export const selectComenziProcesateForPreview = createSelector(
    [selectComenziProcesate],
    comenziProcesate => comenziProcesate ? Object.keys(comenziProcesate).map(key => comenziProcesate[key]) : []
)

export const selectComenziProduse = createSelector(
    [selectComenzi],
    comenzi => comenzi.comenziProduse
)

export const selectProduseComanda = idComanda => createSelector(
    [selectComenziProduse],
    comenziProduse => comenziProduse ? comenziProduse.filter(key => parseInt(key.idComanda) === parseInt(idComanda)) : []
)