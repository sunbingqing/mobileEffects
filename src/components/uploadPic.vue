<template>
    <div class="uploadPic">
        <div class="picBox">
            <!-- <img class="pic" v-show="imgSrc" :src="imgSrc"> -->
            <input type="file" class="choosePic" accept="image/*" @change="change">
        </div>
        <div class="mask" v-show="panel">
            <img :src="url" id="image" alt="Picture" class="maskPic">
            <button type="button">确定</button>
        </div>
    </div>
</template>

<script>
import Cropper from 'cropperjs'

export default {
    name: 'uploadPic',
    data() {
        return {
            imgSrc: null,
            picValue: '',
            panel: false,
            cropper: '',
            croppable: false,
            url: ''
        }
    },
    created() {

    },
    mounted() {
        // init cropper
        const t = this;
        const image = document.getElementById('image');
        this.cropper = new Cropper(image, {
            viewMode: 1,
            aspectRatio: 1,
            background: false,
            zoomable: false,
            ready: function() {
                t.croppable = true;
            },
        })
    },
    methods: {
        getObjectURL(file) {
            let url = null;
            if (window.createObjectURL != undefined) {
                url = window.createObjectURL(file);
            } else if (window.URL != undefined) {
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL != undefined) {
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
        },
        change(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.picValue = files[0];

            this.url = this.getObjectURL(this.picValue);
            console.log(this.url)

            if (this.cropper) {
                this.cropper.replace(this.url);
            }
            this.panel = true;
        }
        // getPic(value) {
        //     const t = this;
        //     if (!/image\/\w+/.test(value.type)) {
        //         console.log('not a pic type', value.type);
        //         return;
        //     }
        //     console.log(value)
        //     if (typeof FileReader != 'undefined') {
        //         console.log(22)
        //         let reader = new FileReader();
        //         reader.readAsDataURL(value); // 将文件以 data URL的形式读入页面

        //         reader.addEventListener("load", function() {
        //             t.imgSrc = reader.result;
        //             console.log(t.imgSrc)
        //         }, false)
        //         reader.addEventListener("error", function() {
        //             console.log('error')
        //         }, false)
        //     } else {
        //         console.log('not support')
        //     }
        // }
    }
}
</script>

<style scoped>
.uploadPic{
    /* position: relative; */
}
.mask{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
.maskPic{
    /* background-size: cover; */
    max-width: 100%;
}
.picBox{
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    margin: 1rem auto;
    border-radius: 50%;
    background: #8595a5;
    text-align: center;
}
.picBox::before{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '+ 添加图片';
    color: #fff;
    font-size: 16px;
    line-height: 1.5rem;
    
}
.pic{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.choosePic{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}
</style>
