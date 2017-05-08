import Vue from 'vue'
import clone from 'clone'
import VueRouter from 'vue-router'
import Filters from './config/filter'
import Router from './config/router'
import store from './store'
import Layout from './layout/index.vue'
import VueHighcharts from 'vue-highcharts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../sass/index.scss'
Vue.use(VueRouter)
Vue.use(VueHighcharts)
Vue.use(ElementUI)

const routes = [
  { path: '/', component: Layout,
    children: Router
  }
]

const router = new VueRouter({routes})
router.beforeEach((to, from, next) => {
  const chain = {
    filters: clone(Filters),
    execute() {
      if (this.filters.length <= 0) {
        next()
      } else {
        let filter = this.filters.shift()
        filter(this, from, to, next)
      }
    }
  }
  chain.execute()
})

const vm = new Vue({
  router,
  store
}).$mount('#app')