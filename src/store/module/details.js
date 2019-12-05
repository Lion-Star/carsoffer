import { getBaoJia } from '@/services/index.js'

const state = {
    data: [],
    nav: ['全部'], //nav
    lists: [], //tab切换数据
    tablist: []
}

const mutations = {
    getlist(state, payload) {
        state.data = payload

    },
    
}

const actions = {
    async getBaoJia({ commit }, payload) {
        let res = await getBaoJia(payload)
        commit('getlist', res.data)
        commit('getData', res.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}