import request from '../../utils/request'

//获取定位
export let getIP=()=>{
    return request('https://baojia.chelun.com/location-client.html')
}
//获取省份
export let getProvincei=()=>{
    return request('https://baojia.chelun.com/v1-city-alllist.html')
}
//获取市
export let getCity=(id)=>{
    return request(`https://baojia.chelun.com/v1-city-alllist.html?provinceid=${id}`)
}
//经销商
export let getShang=(carId,cityId)=>{
    return request(`https://baojia.chelun.com/v2-dealer-alllist.html?carId=${carId} & cityId=${cityId}`)
}