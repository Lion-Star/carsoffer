const state = {
    list: []
}

const mutations = {
    getList(state, payload) {
        state.list = payload;
    }
}

const action = {
    async getMasterBrandList({ commit }, payload) {
        let res = await this.getMasterBrandList();
        console.log('res21231', res);
        commit("getList", res.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    action
}