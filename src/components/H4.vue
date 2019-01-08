<template>
    <h4 class="cuz-h4">
        <slot></slot>
    </h4>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700');
    .cuz-h4 {
        font-family: Quicksand, sans-serif;
        color: #464646;
        font-size: 20px;
        margin-bottom: 0;
        font-weight: 700;
        line-height: 160%;
        margin-top: 10px;
    }
</style>
