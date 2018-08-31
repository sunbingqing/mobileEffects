<template>
    <div class="text" :txtColor="txtColor" :isBlock="isBlock" :class="{'txt-code': isCode, 'txt-block': isBlock}" :style="{background: txtColor}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'txt',
    props: {
        isCode: {
            type: Boolean,
            default: false
        },
        txtColor: {
            type: String,
            default: '#fff'
        },
        isBlock: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style scoped>
.text{
    display: inline-block;
    padding: 0 0.05rem;
    font-size: 14px;
    color: #333;
}
.txt-code{
    margin: 0.05rem 0;
    background-color: #fbfaf8!important;
    padding: 0 0.05rem;
    border: 1px solid #d6d5d3;
    border-radius: 3px;
}
.txt-block{
    display: block;
    margin: 0.05rem 0;
}
</style>


