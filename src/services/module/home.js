import request from '@/utils/request'; //axios 的二次封装


// 获取首页品牌列表
export let getMasterBrandList = () => {
    return request('/v2-car-getMasterBrandList.html')
}

export let getMakeListByMasterBrandId = (id) => {
    return request(`v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`)
}