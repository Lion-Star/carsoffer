import {getColor,getImg} from '@/services/index'

const state = {
    carImg:[],
    colorId: '',  // 选择的车系颜色
    carId: '',  // 选择的车款
}

const mutations = {
    //颜色图片
    getColor(state,payload){
        if(payload.code===1){
            // payload.data.sort((a,b)=>{
            //     return b - a
            // })
            // state.carColor=payload.data
        }else{
            alert(payload.msg)
        }
    },
    //车款图片
    getImg(state,payload){
        state.carImg=payload.data.map(item => {
            item.List = item.List.map(ite => {
                ite.Url = ite.Url.replace('{0}', 3)
                return ite
            })
            return item
        })
    }
}

const actions = {
    async getColor({commit} , payload){
        let res = await getColor(payload)
        commit('getColor',res)
    },
    async getImg({commit , state},payload){
        let params = {SerialID:payload}
        //判断是否选择颜色
        // if(state.colorId){
        //     params.ColorID = state.colorId;
        // }
        // // 判断是否选择车款
        // if (state.carId){
        //     params.CarId = state.carId;
        // }
        let res = await getImg(params)
        commit('getImg',res)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}