import request from '@/utils/request'; //axios 的二次封装

export let getImageList = (params) => {
    return request(`http://baojia.chelun.com/v2-car-getImageList.html`, { params })
}

export let getYearColorList = (id) => {
    return request(`https://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID=${id}`)
}