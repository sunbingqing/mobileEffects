<template>
    <div class="uploadPic">
        <div class="picBox">
            <img class="pic" v-show="imgSrc" :src="imgSrc">
            <input type="file" class="choosePic" accept="image/*" @change="(e) => {getPic(e.target.files[0])}">
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'uploadPic',
    data() {
        return {
            imgSrc: null
        }
    },
    created() {

    },
    methods: {
        getPic(value) {
            const t = this;
            if (!/image\/\w+/.test(value.type)) {
                console.log('not a pic type', value.type);
                return;
            }
            console.log(value)
            if (typeof FileReader != 'undefined') {
                console.log(22)
                let reader = new FileReader();
                reader.readAsDataURL(value); // 将文件以 data URL的形式读入页面

                reader.addEventListener("load", function() {
                    t.imgSrc = reader.result;
                    console.log(t.imgSrc)
                }, false)
                reader.addEventListener("error", function() {
                    console.log('error')
                }, false)
            } else {
                console.log('not support')
            }
            
        }
    }
}
</script>

<style scoped>
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
