<template>
    <div class="inputSlider">
        <div class="inputBox">
            <input ref="inputValue" type="range" class="slider" min="0" max="100" step="10" value="50" 
            :style="{backgroundSize: point + '% 100%'}" @input="change">
            <span class="sliderTip" :style="{left: point * 0.028 + 'rem'}">{{point}}</span>
        </div>
        <div class="txtBox">
            <txt is-block txtColor="#cddae6">input[type=range]</txt>
            <txt is-block>1# 改写滑块样式：
                <txt is-code>input[type=range]::-webkit-slider-thumb {<br>&nbsp;&nbsp;-webkit-appearance: none;/*后面跟想要的样式*/<br>}</txt>
            </txt>
            <txt is-block>2# 改写轨道样式：
                <txt is-code>input[type=range] {<br>&nbsp;&nbsp;-webkit-appearance: none;<br>&nbsp;&nbsp;background: -webkit-linear-gradient(left, #8595a5, #8595a5) no-repeat #e1e1e1;
    <br>&nbsp;&nbsp;background-size: <txt txtColor="#cddae6">50</txt>% 100%;<br>}</txt>
            </txt>
            <txt><txt txt-color="#cddae6">background-size</txt>的第一个参数，即为<txt txt-color="#cddae6">input</txt>的<txt txt-color="#cddae6">value</txt>值</txt>
        </div>
    </div>
</template>

<script>
import txt from './../components/elements/text.vue'

export default {
    name: 'inputSlider',
    components: {
        txt
    },
    data() {
        return {
            point: 50
        }
    },
    methods: {
        change() {
            this.point = this.$refs.inputValue.value;
        }
    }
}
</script>

<style scoped>

.inputSlider{
    padding-top: 2rem;
    text-align: center;
}
.inputBox{
    position: relative;
    width: 3rem;
    margin: 0 auto;
}
.sliderTip{
    position: absolute;
    top: -0.5rem;
    width: 0.25rem;
    background: #739ac0;
    color: #fff;
}

.slider{
    -webkit-appearance: none;
    width: 100%;
    height: 0.1rem;
    background: -webkit-linear-gradient(left, #8595a5, #8595a5) no-repeat #e1e1e1;
    background-size: 50% 100%;
}
.slider::-webkit-slider-thumb{
    -webkit-appearance: none;
    width: 0.2rem;
    height: 0.2rem;
    background: #fff;
    border: 2px solid #739ac0;
}

.txtBox{
    padding-top: 1rem;
    text-align: left;
}

</style>

