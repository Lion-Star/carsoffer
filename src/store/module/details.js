import { getBaoJia } from '@/services/index.js'

const state = {
    data: [],//原数据
    yearNav:['全部'],//nav所有年份
    tablist:[],//当前年份数据
    year:'全部'//当前年份
}

function sortList(list){
    //排序 排量升序 功率升序  自然吸气》涡轮增压
    list.sort((a,b) => {
        if(a.exhaust === b.exhaust){
            if (a.max_power === b.max_power){
                return b.inhale_type > a.inhale_type;
            } else {
                return a.max_power - b.max_power;
            }
        } else {
            return a.exhaust - b.exhaust
        }
    })
    return list
}

//格式化数据
function yearList(list){
    //拼接排量、功率、吸气方式
    list = list.map(item => {
        item.key = `${item.exhaust_str}/${item.max_power_str} ${item.inhale_type}`
        return item
    })

    let newList = []
    list.forEach(item => {
        let index = newList.findIndex(val=>val.key===item.key)
        if(index !== -1){
            newList[index].list.push(item)
        }else{
            newList.push({
                key:item.key,
                list:[item]
            })
        }
    })
    return newList
}
//判断排序数据
function ifList(data){
    state.data = data
    //拿到年份
    state.yearNav = ['全部']
    let yearNav = data.list.map(item => item.market_attribute.year)
    state.yearNav = state.yearNav.concat([...new Set(yearNav)])
    
    //获取当前年份数据
    let tablist=[]
    if(state.year === '全部'){
        tablist = data.list
    }else{
        tablist = data.list.filter(item => item.market_attribute.year === state.year)
    }
    //排序
    tablist = sortList(tablist)
    //数据格式化
    tablist = yearList(tablist)
    state.tablist=tablist
}

const mutations = {
    //总数据获取
    getlist(state,payload){
        console.log("2")
        if(payload.code === 1){
            //判断排序数据
            ifList(payload.data)
        }else{
            alert(payload.msg)
        }
    },
    navActive(state,payload){
        state.year=payload
        ifList(state.data)
    }
}

const actions = {
   async getBaoJia({commit},payload){
       let res = await getBaoJia(payload)
       commit('getlist',res)
   }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}