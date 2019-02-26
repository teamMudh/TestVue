// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import store from './vuex/store'
Vue.use(vueResource)
//引入Axios
import Axios from 'axios'
Axios.defaults.withCredentials = true
Axios.defaults.headers.post['Content-type']='xml'
Axios.defaults.baseURL = '/api'
Vue.prototype.$ajax = Axios; //挂载原型
//Vue.prototype.HOME是一个定值默认指向localhost
//此处修改其路径，让其指向'/api'，配置文件index.js定义的课跨域路径
Vue.prototype.HOME = '/api'
Vue.config.productionTip = false

import x2js from 'x2js' //xml数据处理插件
Vue.prototype.$x2js = new x2js() //创建x2js对象，挂到vue原型上


//引入mint-ui
import MintUI from 'mint-ui'
import { InfiniteScroll, MessageBox,DatetimePicker,IndexList, IndexSection,Lazyload,Popup,Picker,Toast,Loadmore } from 'mint-ui';

Vue.use(MintUI)
Vue.config.productionTip = false

Vue.prototype.$infinitescroll = InfiniteScroll;
Vue.prototype.$messagebox = MessageBox;
Vue.prototype.$datetimepicker = DatetimePicker;
Vue.prototype.$indexlist = IndexList;
Vue.prototype.$indexsection = IndexSection;
Vue.prototype.$lazyload  = Lazyload;
Vue.prototype.$popup = Popup;
Vue.prototype.$picker = Picker ;
Vue.prototype.$toast = Toast;
Vue.prototype.$loadmore = Loadmore;

import { mapMutations } from 'vuex'
import './static/jquery/jquery-1.11.0.js'
// import $ from 'jquery'
import './static/js/init.js'
import './static/js/fiter.js'
// import './static/js/sort.js'
// import './static/js/banner.js'
// import './static/js/jquery.touchSlider'
// import './css/common.css'
// import './css/animate.css'
import 'mint-ui/lib/style.css'
// import './css/my_mnit.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
