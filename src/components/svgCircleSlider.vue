<template>
    <div class="svgCircleSlider">
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
</template>

<script>
export default {
    name: 'svgCircleSlider',
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
    transform: scale(0.6);
    text-align: center;
}
.percent{
    font-size: .32rem;
}
.svg{
    width: 288px;
    height: 288px;
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


