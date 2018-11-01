import Vue from 'vue'
import Router from 'vue-router'

import About from '../pages/About.vue'
import Works from '../pages/Works.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/about', component: About },
    { path: '/works', component: Works }
  ]
})
