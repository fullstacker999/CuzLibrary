<template>
    <h3 class="cuz-h3">
        <slot></slot>
    </h3>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700');
    .cuz-h3 {
        font-family: Quicksand, sans-serif;
        color: #464646;
        margin-bottom: 0;
        font-size: 30px;
        font-weight: 700;
        line-height: 160%;
        margin-top: 10px;
    }
</style>
