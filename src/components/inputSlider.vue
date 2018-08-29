<template>
    <div class="inputSlider">
        <div class="inputBox">
            <input ref="inputValue" type="range" class="slider" min="0" max="100" step="10" value="50" 
            :style="{backgroundSize: point + '% 100%'}" @input="change">
            <span class="sliderTip" :style="{left: point * 0.028 + 'rem'}">{{point}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'inputSlider',
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

</style>

