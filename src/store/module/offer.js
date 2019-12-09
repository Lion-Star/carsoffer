import { getIP , getProvincei ,getCity ,getShang} from '@/services/index'

const state={
    IP:'',//定位
    provinceiData:[],//获取省份
    cityData:[],//获取市
    CityID:'',//地方id
    carID:'',//车id
}

const mutations={
    // 定位
    getIP(state , payload){
        state.CityID=payload.CityID
        state.IP=payload.CityName
    },
    //获取省份
    getProvincei(state,payload){
        state.provinceiData=payload.data
    },
    //改变定位
    setIP(state,payload){
        state.CityID=payload.CityID
        state.IP=payload.CityName
    },
    //获取市
    getCity(state,payload){
        state.cityData=payload.data
    },
    //经销商
    getShang(state,payload){
        console.log('0000',payload)
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