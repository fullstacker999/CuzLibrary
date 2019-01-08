<template>
    <div class="cuzui-richtext">
        <slot>
        </slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .cuzui-richtext {
        font-family: Quicksand,sans-serif;
        clear: both;
        margin-bottom: 60px;
        &::before {
            content: " ";
            display: table;
            grid-column-start: 1;
            grid-row-start: 1;
            grid-column-end: 2;
            grid-row-end: 2;
        }
        &::after {
            content: " ";
            display: table;
            grid-column-start: 1;
            grid-row-start: 1;
            grid-column-end: 2;
            grid-row-end: 2;
        }
    }
</style>
