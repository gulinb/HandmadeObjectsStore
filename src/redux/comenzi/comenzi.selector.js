import {createSelector} from 'reselect'

const selectComenzi = state => state.comenzi

export const selectComenziNoi = createSelector(
    [selectComenzi],
    comenzi => comenzi.comenziNoi
)

export const selectComenziProcesate = createSelector(
    [selectComenzi],
    comenzi => comenzi.comenziProcesate
)
