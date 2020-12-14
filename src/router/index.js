import Vue from 'vue'
import Router from 'vue-router'
import Random from '../pages/random'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'random',
      component: Random
    },
  ]
})
