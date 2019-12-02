import request from "@/utils/request";

//获取首页列表

module.exports = getMasterBrandList => {
    return request('/v2-car-getMasterBrandList.html')
}