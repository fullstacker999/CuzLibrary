<template>
    <p class="cuzui-paragraph">
        <slot></slot>
    </p>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .cuzui-paragraph {
        font-family: Quicksand,sans-serif;
        margin-top: 10px;
        margin-bottom: 10px;
        color: $grey;
        font-size: 18px;
        line-height: 160%;
        text-align: left;
    }
</style>
