<template>
    <div class="canvasColorPicker">
        <div class="canvasBox">
            <input type="range" ref="inputVal" max="100" min="0" class="slider" @input="change()">
            <div class="colorBox">
                <span class="colorBlock" :style="{background: colorVal}"></span>
                <span class="colorValue">{{colorVal}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'canvasColorPicker',
    data() {
        return {
            inputValue: null,
            color: null,
            colorVal: null
        }
    },
    mounted() {
        this.color = this.drawCavans();
        this.colorVal = "rgb(" + this.color.r + "," + this.color.g + "," +this.color.b + ")";
    },
    methods: {
        change() {
            this.inputValue = this.$refs.inputVal.value;
            
            this.color = this.drawCavans(this.inputValue);
            this.colorVal = "rgb(" + this.color.r + "," + this.color.g + "," +this.color.b + ")";
        },
        drawCavans(value){    // 色彩选择中HUE转RGB
            //TODO 通过hsb转换后的rgb与canvas画出颜色在取值时会有误差
            value = value || 50;
            let red,green,blue;
            let c = document.createElement("canvas"); //canvas画布
            let ctx = c.getContext("2d");
            let grd = ctx.createLinearGradient(0, 0, 100.5, 0);    //开始及结束的坐标：x0,y0,x1,y1,取0.5是为当value=100时，可以取到图片
            grd.addColorStop(0, "#FF4C55");
            grd.addColorStop(0.14, "#FCFF4C");
            grd.addColorStop(0.29, "#4CFF5B");
            grd.addColorStop(0.43, "#4CF0FF");
            grd.addColorStop(0.57, "#4C66FF");
            grd.addColorStop(0.71, "#A04CFF");
            grd.addColorStop(0.86, "#FF4CED");
            grd.addColorStop(1, "#FF4C4C");
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, 100.5, 5);    //填充颜色，开始点坐标、宽、高：x0,y0,width,height

            const imgData = ctx.getImageData(value, 0, 100.5, 5);    //图片的起始位置、宽、高，x0,y0,width,height
            red = imgData.data[0];    //返回的图片的RGBA值
            green = imgData.data[1];
            blue = imgData.data[2];
            return {r:red, g:green, b:blue};
        }
    }
}
</script>

<style scoped>
.canvasColorPicker{
    padding-top: 1rem;
}
.canvasBox{
    text-align: center;
}
.slider{
    -webkit-appearance: none;
    width: 3rem;
    height: 0.8rem;
    border-radius: 0.03rem;
    border: 1px solid #f2f2f2;
    background:linear-gradient(90deg,rgba(255,76,85,1),rgba(252,255,76,1),rgba(76,255,91,1),rgba(76,240,255,1),
    rgba(76,102,255,1),rgba(160,76,255,1),rgba(255,76,237,1),rgba(255,76,76,1));
}
.slider::-webkit-slider-thumb{
    -webkit-appearance: none;
    width: 0.1rem;
    height: 0.9rem;
    background: #fff;
    border: 1px solid #e1e1e1;
    box-shadow: 0px 3px 3px 0px #f2f2f2,0px 2px 2px 0px #f2f2f2;
    border-radius: 0.05rem;
}
.colorBox{
    padding-top: 0.5rem;
    text-align: left;
    margin-left: 0.5rem;
}
.colorBlock{
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    border: 1px solid #f2f2f2;
    border-radius:50%;
    vertical-align: middle;
}
.colorValue{
    font-size: 14px;
    color: #333;
    vertical-align: middle;
    padding-left: 0.3rem;
}
</style>
