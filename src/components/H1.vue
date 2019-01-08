<template>
    <h1 class="cuz-h1">
        <slot></slot>
    </h1>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .cuz-h1 {
        font-family: Quicksand, sans-serif;
        color: $dim-grey;
        font-size: 46px;
        font-weight: 700;
        line-height: 140%;
        margin-bottom: 0;
        margin-top: 10px;
    }
</style>
