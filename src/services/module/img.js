import request from '../../utils/request'
//获取颜色
export let getColor=(id)=>{
    return request(`https://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID=${id}`)
}
//获取汽车图片
export let getImg=(params)=>{
    return request("http://baojia.chelun.com/v2-car-getImageList.html",{params})
}
//获取分类图片
export let getTypeImg=(params)=>{
    return request("http://baojia.chelun.com/v2-car-getCategoryImageList.html",{params})
}