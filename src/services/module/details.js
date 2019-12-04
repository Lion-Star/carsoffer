import request from '../../utils/request'

export let getBaoJia=(id)=>{
    return request(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${id}`)
}