<template>
    <button 
        class="bordered-btn"
        :class="`${isIcon ? 'icon ' + iconType : ''}`"
        @click="$emit('click', $event)">
            <slot>Button Text</slot>
        <span>></span>
    </button>
</template>

<script>
export default {
    props: {
        isIcon: {
            type: Boolean,
            default: false
        },
        iconType: {
            type: String, 
            default: "existing-user"
        }
    }
}
</script>

<style lang="scss" scoped>
    .bordered-btn {
        position: relative;
        width: 360px;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 20px 22px;
        border: 2px solid #fff;
        border-radius: 14px;
        background-color: transparent;
        -webkit-transition: all .4s ease;
        transition: all .4s ease;
        color: #fff;
        font-family: Quicksand,sans-serif;
        font-size: 22px;
        font-weight: 700;
        text-align: left;
        &:focus {
            outline: none;
        }
        &:hover {
            cursor: pointer;
            background-color: #fff;
            color: #607cf1;
        }
        &.icon {
            padding-left: 60px;
            background-position: 23px 50%;
            background-repeat: no-repeat;
            margin-right: 10px;
            &.existing-user {
                background-image: url("../assets/img/login-icon.png");
                background-size: 24px;
                &:hover {
                    background-image: url("../assets/img/login-icon-hover.png");
                }
            }

        }
        span {
            position: absolute;
            right: 20px;
        }
    }
</style>
