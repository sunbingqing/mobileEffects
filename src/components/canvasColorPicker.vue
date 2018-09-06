<template>
    <div class="canvasColorPicker">
        <div class="canvasBox">
            <input type="range" ref="inputVal" max="100" min="0" class="slider" @input="change()">
            <div class="colorBox">
                <span class="colorBlock" :style="{background: colorVal}"></span>
                <span class="colorValue">{{colorVal}}</span>
            </div>
        </div>
        <div class="txtBox">
            <txt is-block txtColor="#ead0d1">canvas</txt>
            <txt is-block>1# 创建一个 canvas 元素：
                <txt txtColor="#ead0d1">document.createElement("canvas")</txt>
            </txt>
            <txt is-block>2# 定义 canvas 画布的绘图环境：
                <txt txtColor="#ead0d1">getContext("2d")</txt>
            </txt>
            <txt is-block>3# 创建线性的渐变对象：
                <txt txtColor="#ead0d1">createLinearGradient(x0, y0, x1, y1)</txt><txt>其中，参数 x0, y0 为开始点的横纵坐标，参数 x1, y1 为结束点的横纵坐标，用于判断渐变方向。</txt>
            </txt>
            <txt is-block>4# 规定渐变颜色：
                <txt txtColor="#ead0d1">addColorStop(stop, color)</txt><txt>stop 的值介于0.0～1.0之间，表示渐变中开始于结束之间的位置；color 为结束位置的颜色。</txt>
            </txt>
            <txt is-block>5# 画图：
                <txt txtColor="#ead0d1">fillStyle</txt><txt>填充颜色</txt>
                <txt txtColor="#ead0d1">fillRect</txt><txt>绘制矩形</txt>
            </txt>
            <txt is-block>6# 得到该像素的颜色值：
                <txt is-code>const imgData = ctx.getImageData(x, y, width, height);<br>
            red = imgData.data[0];<br>
            green = imgData.data[1];<br>
            blue = imgData.data[2];<br>
            alpha = imgData.data[3]</txt>
                <txt><txt txtColor="#ead0d1">getImageData()</txt>方法返回 ImageData 对象，用于拷贝画布指定像素数据，其中，x, y表示开始复制左上角位置的 x, y值，width, height表示要复制的矩形区域的宽高。</txt>
                <txt><txt txtColor="#ead0d1">ImageData</txt>保存了该矩形每个像素的信息，即 RGBA 值。可通过 data 属性获得。</txt>
            </txt>
            <txt is-block>7# 结合 input 滑动条，选取对应的颜色值：
                <txt>input 滑动条选中的值<txt txtColor="#ead0d1">value</txt>，赋值到 ctx.getImageData(x, y, width, height) 中的<txt txtColor="#ead0d1">x</txt>上，即可实时获取滑动位置的颜色值了。</txt>
            </txt>
        </div>
    </div>
</template>

<script>
import txt from './../components/elements/text.vue'

export default {
    name: 'canvasColorPicker',
    components: {
        txt
    },
    data() {
        return {
            inputValue: null,
            color: null,
            colorVal: null,
            timer:null,
            c: null
        }
    },
    mounted() {
        this.color = this.drawCavans();
        // document.body.appendChild(this.c)
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
            this.c = document.createElement("canvas"); //canvas画布

            let ctx = this.c.getContext("2d");
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
            ctx.fillRect(0, 0, 100.5, 10);    //填充颜色，开始点坐标、宽、高：x0,y0,width,height
            const imgData = ctx.getImageData(value, 0, 5, 5);   //图片的起始位置、宽、高，x0,y0,width,height
            red = imgData.data[0];    //返回的图片的RGBA值
            green = imgData.data[1];
            blue = imgData.data[2];
            return {r:red, g:green, b:blue};
        }
    }
}
</script>

<style scoped>
canvas{
    width: 400px;
    height: 400px;
    border: 4px solid red;
}
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
    width: 0.3rem;
    height: 0.3rem;
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
.txtBox{
    padding-top: 0.5rem;
}
</style>
