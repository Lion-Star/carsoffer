import request from '@/utils/request'; //axios 的二次封装


export let getCityId = () => {
    return request('/location-client.html')
}

// 获取经销商列表
export let getDealerList = (params) => {
    return request('/v2-dealer-alllist.html', { params })
}

export let getCityList = (params) => {
    return request('/v1-city-alllist.html', { params })
}