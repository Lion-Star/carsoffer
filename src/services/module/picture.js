import request from '@/utils/request'; //axios 的二次封装


//所有图片车款列表
export let getImageList = (params) => {
    return request("/v2-car-getImageList.html", { params })
}

//年份颜色列表
export let getYearColorList = (id) => {
    return request(`https://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID=${id}`)
}

// 获取图片分类列表
export let getImageTypeList = (params) => {
    return request("/v2-car-getCategoryImageList.html", { params })
}