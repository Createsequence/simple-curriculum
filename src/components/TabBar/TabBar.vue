<template>
    <van-tabbar class="tab-bar glass"
                route
                :fixed="true"
                :border="false"
                v-model="active"
                active-color="white"
                inactive-color="#333333"
    >

        <van-tabbar-item class="tab-bar-item" to="/index/schedule">
            <i class="fa fa-th" slot="icon"/>
            课程表
        </van-tabbar-item>

        <van-tabbar-item class="tab-bar-item" to="/index/extend">
            <i class="fa fa-archive" slot="icon"/>
            扩展功能
        </van-tabbar-item>

        <van-tabbar-item class="tab-bar-item" to="/index/profile">
            <i class="fa fa-user" slot="icon"/>
            个人
        </van-tabbar-item>

    </van-tabbar>
</template>

<script>
    export default {
        name: "TabBar",
        data() {
            return {
                active: 0
            };
        }
    }
</script>

<style scoped>
    /*为点击框添加滤镜*/
    .tab-bar {
        font-weight: bold;
    }
</style>