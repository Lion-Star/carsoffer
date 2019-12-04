import { getMasterBrandList, getMakeListByMasterBrandId } from '@/services/index'

const state = {
    list: [],
    carlist: []
}

const mutations = {
    getCarlist(state, payload) { // 抽屉的数据
        state.carlist = payload
    },
    getlist(state, payload) { //得到主页面数据并且处理
        payload.forEach((item, index) => {
            item.title = item.Spelling.slice(0, 1);
        });
        let arrnum = payload.map((item, index) => {
            return item.Spelling.slice(0, 1)
        })
        let arrsort = Array.from(new Set(arrnum))
        let result = []
        arrsort.forEach((item, index) => {
            let obj = {};
            let arr = [];
            obj.title = item
            for (let i = payload.length - 1; i >= 0; i--) {
                if (item === payload[i].Spelling.slice(0, 1)) {
                    arr.unshift(payload[i])
                    payload.splice(i, 1)
                }
            }
            obj.data = [...arr]
            result.push(obj)
        })
        state.list = result
    }
}

const actions = {
    async getMasterBrandList({ commit }, payload) { //请求主页面数据
        let res = await getMasterBrandList();
        commit('getlist', res.data);
    },
    async getMakeListByMasterBrandId({ commit }, payload) { //请求侧栏车系数据
        let res = await getMakeListByMasterBrandId(payload);
        commit('getCarlist', res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}