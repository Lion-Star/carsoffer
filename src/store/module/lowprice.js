import { getDealerList, getCityId, getCityList } from '@/services/index'

const state = {
    DealerList: [],
    city: 0,
    cityList: [],
    countyList: []
}

const mutations = {
    getDealerData(state, payload) {
        state.DealerList = payload.list
    },
    updateCityId(state, payload) {
        state.city = payload
    },
    updateCityList(state, payload) {
        state.cityList = payload
    },
    updateCountyList(state, payload) {
        state.countyList = payload
    },
}
const actions = {

    async getCityId({ commit }, payload) {
        let res = await getCityId(payload)
        commit('updateCityId', res.data)
    },
    async getDealerList({ commit }, payload) {
        let res = await getDealerList(payload)
        commit('getDealerData', res.data)
        console.log(payload, res.data.list);
    },
    async getCityList({ commit }, payload) {

        let res = await getCityList(payload)
        if (payload) {
            commit('updateCountyList', res.data)
            console.log(res.data);
        } else {
            commit('updateCityList', res.data)

        }

    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}