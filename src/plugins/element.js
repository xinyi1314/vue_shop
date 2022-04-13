import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// message需要进行全局挂载，把弹框组件挂到了vue的原型对象上，这样的话每一个组件都可以通过$message来获取到弹框组件从而使用
Vue.prototype.$message = Message
