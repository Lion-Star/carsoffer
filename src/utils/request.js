<<<<<<< HEAD
import axios from "axios"

//创建axios实例
=======
import axios from 'axios';

// 创建axios实例
>>>>>>> 66783649e268db2af67b4bb09752c804f137fd9e
const instance = axios.create({
    baseURL: 'https://baojia.chelun.com',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
<<<<<<< HEAD
})

//请求拦截器
instance.interceptors.request.use(function(config) {
    // Do something before request is sent
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(function(response) {
    // Do something with response data
    // return response;
    if (response.status == 200) {
        return response.data;
    } else {
=======
});

// 请求拦截器
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
 
// 响应拦截器
instance.interceptors.response.use(function (response) {
    // Do something with response data
    // return response;
    if (response.status == 200){
        return response.data;
    }else{
>>>>>>> 66783649e268db2af67b4bb09752c804f137fd9e
        this.$notify({
            type: 'warning',
            message: response.text
        });
    }
<<<<<<< HEAD
}, function(error) {
=======
  }, function (error) {
>>>>>>> 66783649e268db2af67b4bb09752c804f137fd9e
    // Do something with response error
    this.$notify({
        type: 'warning',
        message: error
    });
<<<<<<< HEAD
});
=======
    // return Promise.reject(error);
  }
);
>>>>>>> 66783649e268db2af67b4bb09752c804f137fd9e

export default instance;