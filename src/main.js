import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入子图图标
import 'assets/font/iconfont.css'
//原型引入Message
Vue.prototype.$message=Message
//引入element-ui
import 'element-ui/lib/theme-chalk/index.css'
import {
  Form,
  Input,
  FormItem,
  Button,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Row,
  Col,
  Menu,
  MenuItemGroup,
  MenuItem,
  Submenu
} from 'element-ui'

Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Submenu)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
