import { getImageList, getYearColorList } from '@/services/index'

const state = {
    imgList: [], //图片列表
    colorId: '', // 车系颜色
    carId: '', // 车款
    yearData: {}, //汽车颜色年份数据
}

const mutations = {
    getImgList(state, payload) {
        state.imgList = payload.map((item, index) => { //由于数据中的图片url有问题 先给他处理一下
            item.List = item.List.map((val, i) => {
                val.Url = val.Url.replace('{0}', 1)
                return val;
            })
            return item;
        });
        console.log(state.imgList);
    },
    getYear(state, payload) {
        state.yearData = payload;
    },
    setColorId(state, payload) {
        state.colorId = payload;
    },
    setCarId(state, payload) {
        state.carId = payload;
    }
}

const actions = {
    async getImageList({ commit, state }, payload) {
        let params = { SerialID: payload };
        if (state.CarId) { //如果车款有值
            params.CarId = state.carId;
        }
        if (state.ColorID) { //如果车系有值
            params.ColorID = state.colorId;
        }
        let res = await getImageList(params)
        commit('getImgList', res.data)
    },

    async getYearColorList({ commit }, payload) {
        let res = await getYearColorList(payload)
        commit('getYear', res.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}