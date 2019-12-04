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
    getData(state, payload) {
        state.lists = payload.list
        state.tablist = payload.list
        let market_attribute = [];
        state.lists.filter(item => {
            market_attribute.push(item.market_attribute)
        });

        //年份
        let year = []
        market_attribute.filter(item => {
            year.push(item.year)
        })
        year.filter((item, index) => {
            if (state.nav.indexOf(item) === -1) {
                state.nav.push(item)
            }
        });
        //排量排序
        state.tablist.sort((a, b) => {
            console.log(a, b);

            var value1 = a['exhaust'],
                value2 = b['exhaust']
            if (value1 === value2) {
                return b["max_power"] - a["max_power"]
            }
            return value1 - value2
        })
    }
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