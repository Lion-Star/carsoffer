import {getBaoJia} from '@/services/index.js'

const state = {
    data: [],
    nav:['全部'],//nav
    lists:[],//tab切换数据
    tablist:[]
}

const mutations = {
    getlist(state,payload){
        state.data=payload
    },
    getData(state,payload){  
        //tab数据
        console.log(payload);
        
        // state.lists=payload.list
        // state.tablist=payload.list
        // console.log(state.lists);
        
        
        // let market_attribute=[]
        // state.lists.filter(item=>{
        //     market_attribute.push(item.market_attribute)
        // })
        // //年份
        // let year=[]
        // market_attribute.filter(item=>{
        //     year.push(item.year)
        // })
        // year.filter((item,index)=>{
        //     if(state.nav.indexOf(item)===-1){
        //         state.nav.push(item)
        //     }  
        // }) 
        // //耗油排序
        // state.tablist.sort((a,b)=>{
        //     return ( a.exhaust - b.exhaust || a.max_power - b.max_power || a.market_attribute.year - b.market_attribute.year)
        // })
        // console.log(state.tablist)  
    }
}

const actions = {
   async getBaoJia({commit},payload){
       let res=await getBaoJia(payload)
       commit('getlist',res.data)
   }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}