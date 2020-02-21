<template>
    <div>
        <van-nav-bar class="nav-bar glass" fixed :border="false">
        <span slot="title">
            {{ title }}
        </span>
        </van-nav-bar>

        <!--用于降低表格防止被顶部栏遮住-->
        <div class="fill" />
    </div>

</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                title: '课程表'
            }
        },
        watch:{
            '$route':function (to, from) {
                switch (to.path) {
                    case '/index/schedule': this.title = '课程表';break;
                    case '/index/extend': this.title = '扩展功能';break;
                    case '/index/profile': this.title = '个人';break;
                }
            }
        }
    }
</script>

<style scoped>
    .nav-bar span {
        font-weight: bold;
        color: white;
    }
</style>