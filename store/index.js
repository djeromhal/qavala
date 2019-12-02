import moment from 'moment';

export const state = () => ({
    candles: []
})

export const mutations = {
    setCandles(state, candles) {
        state.candles = candles
    }
}

export const actions = {
    async fetch({commit}) {
        const candles = await this.$axios.$get('https://cloud.iexapis.com/stable/stock/fb/intraday-prices?chartLast=0&token=pk_8197bc91336f40529ed52877363c6efa')
        // console.log(candles)
        
        candles.forEach(function (arrayItem) {
            arrayItem.label = moment(arrayItem.label, 'HH:mm A').toDate();
        });
        commit('setCandles', candles)
    }
}

export const getters = {
    candles: s => s.candles
}
