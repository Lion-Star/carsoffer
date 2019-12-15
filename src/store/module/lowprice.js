import { getDealerList, getCityId, getCityList, submitLowprice } from '@/services/index'

const state = {
    DealerList: [], //经销商列表
    city: 0,
    cityList: [],
    countyList: [],
    Val: {},
    showCity: false,
    lowPrice: {},
    cityName: "北京"
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
    setVal(state, payload) {
        state.Val = payload
    },
    showCity1(state, payload) {
        state.showCity = payload
    },
    setCityName(state, payload) {
        state.cityName = payload
    },
    updateLowPrice(state, payload) {
        state.lowPrice = payload
    }
}
const actions = {

    async getCityId({ commit }, payload) {
        let res = await getCityId(payload)
        commit('updateCityId', res.data)
    },
    async getDealerList({ commit }, payload) {

        let res = await getDealerList(payload)

        commit('getDealerData', res.data)

    },
    async getCityList({ commit }, payload) {
        let res = await getCityList(payload)
        if (payload) {
            commit('updateCountyList', res.data)
        } else {
            commit('updateCityList', res.data)
        }
    },

    async submitLowprice({ commit, state }, payload) {

        let params = {
            name: payload.name,
            mobile: payload.mobile,
            carid: state.Val.car_id,
            location: state.city.CityName,
            dealerids: state.DealerList[0].dealerId
        }
        console.log(params);

        let res = await submitLowprice(params)
        console.log(res);

        commit("updateLowPrice", res)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}