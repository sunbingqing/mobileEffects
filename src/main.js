import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import inputSlider from './components/inputSlider.vue'
import index from './components/index.vue'
import svgCircleSlider from './components/svgCircleSlider.vue'
import canvasColorPicker from './components/canvasColorPicker.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/inputSlider',
      name: 'inputSlider',
      component: inputSlider
    },
    {
      path: '/svgCircleSlider',
      name: 'svgCircleSlider',
      component: svgCircleSlider
    },
    {
      path: '/canvasColorPicker',
      name: 'canvasColorPicker',
      component: canvasColorPicker
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
