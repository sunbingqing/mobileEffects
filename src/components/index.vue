<template>
  <div class="index">
    <button v-for=" (item,index) in content" :key="item.text" 
    :style="{backgroundColor: item.color}" class="btn"
    @click="clicked(index)">{{item.text}}</button>
  </div>
    
  
</template>

<script>
import {colorArr} from './../assets/js/config.js'

export default {
  name: 'index',
  props: {
    msg: String
  },
  data() {
    return {
      content: [
        {
          text: 'input[type=range]滑动条',
          color: colorArr[Math.floor(Math.random()*colorArr.length)],
          name: 'inputSlider'
        },
        {
          text: 'svg圆环进度条',
          color: colorArr[Math.floor(Math.random()*colorArr.length)],
          name: 'svgCircleSlider'
        },
        {
          text: 'canvas颜色picker',
          color: colorArr[Math.floor(Math.random()*colorArr.length)],
          name: 'canvasColorPicker'
        },
        {
          text: 'touch环形温度控制',
          color: colorArr[Math.floor(Math.random()*colorArr.length)],
          name: 'tempControl'
        },
        {
          text: 'touch横滑&竖滑',
          color: colorArr[Math.floor(Math.random()*colorArr.length)],
          name: 'croseVerticalSlip'
        }
      ]
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
   
  },
  methods: {
    clicked(idx) {
     this.$router.push({name: this.content[idx].name})
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
  padding: .1rem .15rem;
  margin: 0.06rem;
  color: #fff;
  border-radius: 0.05rem;
  font-size: 14px;
}
</style>
