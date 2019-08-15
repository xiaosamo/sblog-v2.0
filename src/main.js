import Vuex from 'vuex'
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueRouter from 'vue-router'


import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor, /* { default global options } */)

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import './static/css/index.css'

Vue.use(iView);

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false


import VueWechatTitle from 'vue-wechat-title';
Vue.use(VueWechatTitle)


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
