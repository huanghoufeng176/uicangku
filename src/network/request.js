import axios from 'axios'

export function request(config){
  return new Promise((resolve,reject)=>{
    //1.创建实例对象
    const instance=axios.create({
      baseURL:'http://timemeetyou.com:8889/api/private/v1/',
      timeout:5000
    }) 
    //2.1axios拦截器
    instance.interceptors.request.use(config=>{
      config.headers.Authorization=window.sessionStorage.getItem('token')
      console.log(config)
      return config
    })
    //2.2发起网络请求
    instance(config).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err)
    })
  })
}