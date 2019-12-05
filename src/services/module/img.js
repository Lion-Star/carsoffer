import request from '../../utils/request'

export let getColor=(id)=>{
    return request(`https://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID=${id}`)
}

export let getImg=(params)=>{
    return request("http://baojia.chelun.com/v2-car-getImageList.html",{params})
}