// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueHotkey from 'v-hotkey'
import VueScrollTo from 'vue-scrollto'
import VueClampy from '@clampy-js/vue-clampy'
import VueInfiniteScroll from 'vue-infinite-scroll'
import vBlur from 'v-blur'
import Ripple from 'vue-ripple-directive'
Vue.directive('ripple', Ripple);
Ripple.color = 'rgba(0, 0, 0, 0.2)'; //自定义水波纹颜色

Vue.use(vBlur, {
  opacity: 0.9,
  filter: 'blur(3px)',
  transition: 'all .3s linear'
}) //半透明遮罩

Vue.use(VueHotkey);
Vue.use(VueScrollTo);
Vue.use(VueClampy, {
  truncationChar: '✂️'
});
Vue.use(VueInfiniteScroll);

Vue.config.productionTip = false;

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el,val) {
    // 聚焦元素
    (val.expression !== 'undefined' || !!val.value) && el.focus()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  directives:{
  },
  components: { App },
  template: '<App/>'
})
