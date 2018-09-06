import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import inputSlider from './components/inputSlider.vue'
import index from './components/index.vue'
import svgCircleSlider from './components/svgCircleSlider.vue'
import canvasColorPicker from './components/canvasColorPicker.vue'
import tempControl from './components/tempControl.vue'
import croseVerticalSlip from './components/croseVerticalSlip.vue'
import uploadPic from './components/uploadPic.vue'

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
    },
    {
      path: '/tempControl',
      name: 'tempControl',
      component: tempControl
    },
    {
      path: '/croseVerticalSlip',
      name: 'croseVerticalSlip',
      component: croseVerticalSlip
    },
    {
      path: '/uploadPic',
      name: 'uploadPic',
      component: uploadPic
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
