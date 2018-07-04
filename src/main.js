// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/PlaygroundStore'

import Treeview from 'vue-json-tree-view'

import 'jquery/dist/jquery.js'
import 'elasticsearch/src/elasticsearch.jquery.js'
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbootstrap/css/mdb.min.css'
import 'mdbootstrap/css/style.css'
import 'font-awesome/css/font-awesome.css'
// other util
import UIUtil from './util/UIUtil'

window.UIUtil = UIUtil

Vue.config.productionTip = false
Vue.use(Treeview)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
