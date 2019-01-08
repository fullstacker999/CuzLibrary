<template>
    <div class="checkbox-wrapper">
        <input type="checkbox" 
            :class="`${type}`"
        >
        <label class="checkbox-label">
            <slot>This is some text inside of a div block.</slot>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: "default"
        }
    }
}
</script>

<style lang="scss" scoped>
    .checkbox-wrapper {
        font-family: Quicksand,sans-serif;
        font-size: 18px;
        input[type="checkbox"].default {
            width: 20px;
            height: 20px;
            border: 3px solid #fff;
            border-radius: 6px;
            background-color: #d4d4d4;
            -webkit-transition: background-color .4s ease;
            transition: background-color .4s ease;
            font-size: 18px;
            float: left;
        }
        input[type="checkbox"].primary {
            &::before {
                position: relative;
                display: block;
                content: "";
                width: 17px;
                height: 17px;
                margin-top:-5px;
                border: 3px solid #fff;
                border-radius: 6px;
                background-color: #d4d4d4;
                -webkit-transition: background-color .4s ease;
                transition: background-color .4s ease;
                font-size: 18px;
            }
            &:hover::before {
                cursor: pointer;
                background-color: #44d85c;
            }
            &:checked::before {
                background-color: #44d85c;
            }
        }

        .checkbox-label {
            color: #fff;
            margin-left: 10px;
        }
    }

    
</style>
