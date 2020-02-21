<template>
    <!--功能-->
    <van-col class="extend-function-item" span="6">
        <button @click="link()">

            <!--图标-->
            <slot name="icon">
                <i :class="'extend-function-item-icon fa ' + faIcon" />
            </slot>

            <br />

            <!--文字-->
            <slot name="text">
                <div class="extend-function-item-text">
                    {{ text }}
                </div>
            </slot>

        </button>
    </van-col>
</template>

<script>
    export default {
        name: "ExtendListItem",
        props: {
            text: {
                default: '文字',
                type: String
            },
            faIcon: {
                default: 'fa-list',
                type: String
            },
            to: {
                default: 'is a link',
                type: String
            }
        },
        methods: {
            link() {
                console.log("link:" + this.to)
            }
        }
    }
</script>

<style scoped>
    .extend-function-item {
        background-color: var(--main-blue);
        text-align: center;

        padding-top: 10px;
        height: 70px;
    }
    /*按钮*/
    .extend-function-item button{
        border: none;
        background-color: var(--main-blue);
    }
    /*图标*/
    .extend-function-item-icon{
        font-size: 25px;
    }
    /*文字*/
    .extend-function-item-text {
        font-size: 10px;
    }
</style>