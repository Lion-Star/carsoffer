import { getImageList, getYearColorList, getImageTypeList } from '@/services/index'

const state = {
    imgList: [], //分类图片列表
    imageTypeList: [], //分类图片列表
    colorId: 0, // 车系颜色id
    carId: 0, // 车款id
    ImageID: "", //分类id
    SerialID: "", //车系id
    yearData: {}, //汽车颜色年份数据
    colorName: '', //颜色名称
    Count: 0, //总数据
    Page: 1, //分页 当前页 给默认值
    PageSize: 30, //每页数量 给默认值
    Current: ""

}

const mutations = {
    //分类图片列表
    getImgList(state, payload) {
        state.imgList = payload.map((item, index) => { //由于数据中的图片url有问题 先给他处理一下
            item.List = item.List.map((val, i) => {
                val.Url = val.Url.replace('{0}', 1)
                return val;
            })
            return item;
        })
    },
    // 年份数据
    getYear(state, payload) {
        state.yearData = payload;
    },
    // 设置seriallId
    setSerialID(state, payload) {
        console.log(payload);
        state.SerialID = payload
    },
    // 修改图片分类id
    setImageId(state, payload) {
        state.ImageID = payload;
        console.log(state.ImageID);
    },
    // 改变颜色id
    setColorId(state, payload) {
        console.log(payload);
        state.colorName = payload.Name;
        state.colorId = payload.ColorId;
        console.log(state.ColorId);
    },
    // 改变车系id
    setCarId(state, payload) {
        state.carId = payload;
        console.log(state.carId);
    },
    // 修改当前分页
    setPage(state, payload) {
        state.Page = payload;
        console.log(state.Page);
    },
    // 设置图片总数
    setCount(state, payload) {
        state.Count = payload;
        console.log(state.Count);
    },
    // 设置当前轮播的图片下标
    setCurrent(state, payload) {
        state.Current = payload;
    },
    // 图片列表
    setImageTypeList(state, payload) {
        state.Count = payload.Count;
        // 实现上拉加载
        if (state.page == 1) {
            state.imageTypeList = payload.List;
        } else {
            state.imageTypeList = state.imageTypeList.concat(payload.List);
        }
    }
}

const actions = {
    //图片列表
    async getImageList({ commit, state }, payload) {
        let params = { SerialID: payload };
        console.log(params, "111111111111");
        if (state.carId) { //如果车款有值
            params.CarId = state.carId;
        }
        if (state.colorId) { //如果车系有值
            params.ColorID = state.colorId;
        }

        let res = await getImageList(params)
        commit('getImgList', res.data)
    },
    //颜色年份列表
    async getYearColorList({ commit }, payload) {
        let res = await getYearColorList(payload)
        commit('getYear', res.data)
    },
    //分类列表请求
    async getImageTypeList({ commit, state }, payload) {

        //接收四个参数SerialID，ImageID，Page，PageSize
        console.log(state.Page);

        if (payload) {
            commit('setPage', payload);
        }
        let params = {
            SerialID: state.SerialID,
            ImageID: state.ImageID,
            Page: state.Page,
            PageSize: state.PageSize
        }
        console.log(params);

        let res = await getImageTypeList(params);
        let { Count, List } = res.data;
        console.log(res.data);
        commit('setImageTypeList', { Count, List });
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}