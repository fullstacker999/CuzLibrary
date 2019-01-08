<template>
    <blockquote class="cuzui-blockquote">
        <slot></slot>
    </blockquote>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .cuzui-blockquote {
        font-family: Quicksand,sans-serif;
        margin-bottom: 10px;
        padding: 10px 20px;
        border-left: 5px solid #607cf1;
        background-color: #eaeeff;
        color: #607cf1;
        font-weight: 700;
        font-size: 18px;
        line-height: 160%;
        margin-top: 10px;
        text-align: left;
    }
</style>
