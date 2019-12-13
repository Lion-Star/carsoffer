import {getColor , getImg , getTypeImg} from '@/services/index'

const state = {
    carImg:[],//车图片
    colorId: '',  // 选择的车系颜色
    carId: '',  // 选择的车款
    carColor:[],//车颜色
    colorData:[],//切换的车颜色

    SerialID: "", //车系id
    ImageID: "", //分类id
    imageList: [], //分类图片列表
    current: 0,    // 轮播的当前图片
    count: '',  //当前分类图片总数
    page: 1,  //当前分页
    pageSize: 30, //每页数量
    showImg:false
}

const mutations = {
    showImg(state,payload){
        state.showImg=true
    },
    //获取颜色
    getColor(state,payload){
        if(payload.code===1){
            state.carColor = payload.data
            state.colorData = payload.data  
        }else{
            alert(payload.msg)
        }
    },
    //车款图片
    getImg(state,payload){
        state.carImg = payload.data.map(item => {
            item.List = item.List.map(ite => {
                ite.Url = ite.Url.replace('{0}', 3)
                return ite
            })
            return item
        })
    },
    //颜色切换
    colorTab(state,payload){
        state.colorData=payload
    },
    //设置车系id
    setSerialID(state,payload){
        state.SerialID=payload
    },
    //设置分类id
    setImgID(state,payload){
        state.ImageID = payload
    },
    //获取分类图片
    setImageList(state,payload){
        state.count = payload.Count;
        // payload.ImageID && (state.ImageID = payload.ImageID);
        // 实现上拉加载
        if (state.page == 1){
            state.imageList = payload.List;
        }else{
            state.imageList = state.imageList.concat(payload.List);
        }
    },
    //修改分页
    setPage(state, payload){
        state.page = payload;
    },
    //修改当前页
    setCurrent(state,payload){
        state.current = payload
    }
}

const actions = {
    //获取颜色
    async getColor({commit} , payload){
        let res = await getColor(payload)
        commit('getColor',res)
    },
    //获取图片
    async getImg({commit , state},payload){
        state.showImg=false
        let params = {SerialID:payload}
        // 判断是否选择颜色
        if(state.colorId){
            params.ColorID = state.colorId;
        }
        // 判断是否选择车款
        if (state.carId){
            params.CarId = state.carId;
        }
        let res = await getImg(params)
        commit('getImg',res)
    },
    //获取图片类型
    async getTypeImg({commit , state},payload){
        if (payload){
            commit('setPage', payload);
        }
        let params = {
            SerialID: state.SerialID,
            ImageID: state.ImageID,
            Page: state.page,
            PageSize: state.pageSize
        }
        let res = await getTypeImg(params);
        let {Count, List} = res.data
        commit('setImageList', {Count, List});
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}