import request from '@/utils/request'; //axios 的二次封装

export let getBaoJia = (id) => {
    return request(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${id}`)
}