import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from 'components/Login.vue'
import Home from 'components/Home.vue'
import Welcome from 'components/Welcome.vue'

const router = new VueRouter({
  routes:[
    {path:'',redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/home',component:Home,redirect:'/welcome',children:[
      {path:'/welcome',component:Welcome}
    ]},  
  ],
})

//路由守航卫士
router.beforeEach((to,from,next)=>{
  if(to.path=='/login') return next()
  //获取session中token的值
  const tokenStr=window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
 })
export default router