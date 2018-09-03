<template>
    <div class="svgCircleSlider">
        <div class="svgBox">
            <svg class="svg">
                <circle cx="144" cy="144" r="140" stroke="#f5f5f5"
                stroke-width="8" fill="none"/>
                <circle cx="144" cy="144" r="140" stroke="#c9c0d3"
                stroke-width="8" fill="none" stroke-dasharray="0 900"
                transform="matrix(0,-1,1,0,0,288)" class="progressSvg"
                id="svgId"/>
                <text class="percent" x="50%" y="50%" text-anchor="middle"
                dominant-baseline="middle" fill="#c9c0d3" id="percentId">0%</text>
            </svg>
        </div>
       
        <txt txtColor="#c9c0d3" is-block>svg圆环进度条</txt>
        <txt is-block>1# svg先画一个轨道圆环：
            <txt is-code><span>&lt;</span>circle cx="144" cy="144" r="140" stroke="#f5f5f5"
                stroke-width="8" fill="none"/></txt>
        </txt>
        <txt is-block>2# svg画进度圆环：
            <txt is-code><span>&lt;</span>circle cx="144" cy="144" r="140" stroke="#c9c0d3"
                stroke-width="8" fill="none" <txt txtColor="#c9c0d3">stroke-dasharray="0 900"
                transform="matrix(0,-1,1,0,0,288)"</txt> class="progressSvg"
                id="svgId"/></txt>
        </txt>
        <txt>
            <txt txtColor="#c9c0d3">stroke-dasharray</txt>
        在svg中表示描边的是虚线，第一个参数是虚线的宽度，第二个是虚线之间的间距。</txt>
        <txt is-block>因此，我们需要让间距永远不小于圆的周长，然后，<txt txtColor="#c9c0d3">虚线的长度 = 百分比 * 圆的周长</txt>。</txt>
        <txt>注意：由于 stroke-dasharray 的起始位置在右侧，我们需要用 transform 逆时针旋转90deg。</txt>
        <txt>ios手机坐标异常,可通过如下方式修正：
            <txt is-code>svg {<br>&nbsp;&nbsp;-webkit-transform: rotate(-0.05deg);<br>&nbsp;&nbsp;
    transform: rotate(-0.05deg);<br>}</txt>
        </txt>
        <txt>3# 接下来就是利用 animation 动画改变 stroke-dasharray 的值。百分比可以利用 setInterval() 来实现。</txt>
    </div>
</template>

<script>
import txt from './../components/elements/text.vue'

export default {
    name: 'svgCircleSlider',
    components: {
        txt
    },
    data() {
        return {
        }
    },
    mounted() {
        this.doit(100, 'percentId');
    },
    methods: {
        doit(end,id){
            var o = document.getElementById(id);
            var i = 0;
            var Interval;
            if(i<end){
                Interval=setInterval(function(){
                o.innerHTML = i.toString() + '%';
                i++;
                if(i>end) {
                    clearInterval(Interval);
                    i = 0;}
                },300);
            }else alert('参数有误');
        }
    }
}
</script>

<style scoped>
.svgCircleSlider{
    padding-top: 1rem;
    
}
.svgBox{
    transform: scale(0.6);
    text-align: center;
}
.percent{
    font-size: .32rem;
}
.svg{
    width: 288px;
    height: 288px;
     /* ios手机坐标异常 */
    -webkit-transform: rotate(-0.05deg); 
    transform: rotate(-0.05deg);
}
.progressSvg{
    stroke-dasharray: 0 900;
    animation: run 30s linear;
    animation-fill-mode: forwards;
}
@keyframes run {
    to {
        stroke-dasharray: 880 900;
    }
}
</style>


