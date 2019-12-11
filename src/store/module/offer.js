import { getIP , getProvincei ,getCity ,getShang} from '@/services/index'

const state={
    IP:'',//定位
    provinceiData:[],//获取省份
    cityData:[],//获取市
    dealerlist:[],//经销商数据
}

const mutations={
    // 定位
    getIP(state , payload){
        state.IP=payload.CityName
        sessionStorage.setItem('CityID',payload.CityID)
    },
    //获取省份
    getProvincei(state,payload){
        state.provinceiData=payload.data
    },
    //改变定位
    setIP(state,payload){
        state.IP=payload.CityName
        sessionStorage.setItem('CityID',payload.CityID)
    },
    //获取市
    getCity(state,payload){
        state.cityData=payload.data
    },
    //获取经销商
    getShang(state,payload){
        state.dealerlist = payload.data.list
        console.log(state.dealerlist)
    }
}

const actions={
    //获取定位
    async getIP({commit} , payload){
        let res = await getIP(payload)
        commit('getIP',res.data)
    },
    //获取省份
    async getProvincei({commit} , payload){
        let res = await getProvincei(payload)
        commit('getProvincei',res)
    },
    //获取市
    async getCity({commit} , payload){
        let res = await getCity(payload)
        commit('getCity',res)
    },
    //经销商
    async getShang({commit} , payload){
        let res = await getShang(payload)
        commit('getShang',res)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}