<template>
    <!--功能分类-->
    <div class="extend-function">

        <!--分类名称-->
        <van-row class="extend-function-title">
            <van-col span="12" offset="1">
                <span>{{ title }}</span>
            </van-col>
        </van-row>

        <!--功能列表-->
        <van-row>
            <slot></slot>
        </van-row>

    </div>
</template>

<script>
    export default {
        name: "ExtendList",
        props: {
            title: {
                default: '标题',
                type: String
            }
        }
    }
</script>

<style scoped>
    .extend-function-title {
        padding-top: 10px;
        color: var(--main-dark);
    }
</style>