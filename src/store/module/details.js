import { getBaoJia } from '@/services/index.js'

const state = {
    data: {},
    yearTab: '全部',
    yearList: [], //nav
    tabData: [] //下方的数据
}

//多重排序
function tabListSort(list) {
    //排序规则 
    //  1.排序exhaust(排量) 数字 
    //  2.排序max_power(功率) 数字 
    //  3.排序inhale_type(吸气方式) 字符串
    list.sort((a, b) => {
        if (a.exhaust === b.exhaust) {
            if (a.max_power === b.max_power) {
                return b.inhale_type > a.inhale_type;
            } else {
                return a.max_power - b.max_power
            }
        } else {
            return a.exhaust - b.exhaust
        }
    })
    return list
}

//处理请求的数据变为咱们想要的数据
function createTabList(list) {
    //给数据添加一个key属性 用来展示在页面的一条数据（方式为 排量/功率 吸气方式）
    list.map(item => {
        item.key = `${item.exhaust_str}/${item.max_power_str} ${item.inhale_type}`;
        return item;
    });
    let newList = [];
    list.forEach(item => {
        //采用findindex 来处理数据 
        let index = newList.findIndex(val => val.key === item.key);
        //newList 中的一项的key属性 与 item相等的话 就添加进那一项的list中 否则添加一个新的对象 格式如{key: item.key,list: [item]}
        if (index !== -1) {
            newList[index].list.push(item);
        } else {
            newList.push({
                key: item.key,
                list: [item]
            })
        }
    })
    return newList

}

function getTabData(data) {

    state.tabData = data

    state.yearList = ["全部"]
        //拿到年份tab
    let year = data.list.map(item => item.market_attribute.year);

    let arr = [...new Set(year)]
    state.yearList = state.yearList.concat(arr);


    let currentList = [];

    if (state.yearTab == '全部') {
        currentList = data.list;

    } else {
        currentList = data.list.filter(item => item.market_attribute.year == state.yearTab);
    }

    console.log(currentList);

    // 3.给当前年份数据排序
    currentList = tabListSort(currentList);
    console.log(currentList);
    // 4.聚合key相同的车款数据
    currentList = createTabList(currentList);

    state.tabData = currentList;
}

const mutations = {
    getlist(state, payload) {
        state.data = payload
        getTabData(state.data)
    },
    changeYearList(state, payload) {
        state.yearTab = payload
        getTabData(state.data)
    }

}

const actions = {
    async getBaoJia({ commit }, payload) {
        let res = await getBaoJia(payload)
        let data = res.data
        commit('getlist', res.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}