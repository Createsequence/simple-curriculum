<template>
    <div>
        <van-nav-bar class="nav-bar glass" fixed :border="false">
            <!--返回箭头-->
            <van-icon name="arrow-left"
                      class="nav-bar-arrow"
                      v-if="isExtendFunction"
                      @click="back()"
                      slot="left"/>

            <!--标题-->
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
                title: '课程表',
                isExtendFunction: false
            }
        },
        methods: {
            /*返回页面*/
            back() {
                this.$router.back();
            }
        },
        watch:{
            '$route':function (to, from) {
                let path = to.path;

                //判断是否进入二级页面
                if (path.split("/").length > 3) {
                    //是则显示返回箭头
                    this.isExtendFunction = true;
                } else {
                    //否则取消返回箭头
                    this.isExtendFunction = false
                }

                this.title = changeTitle(path);
            }
        }
    }

    /*
    * 根据路由跳转路径返回要切换的标题
    * */
    function changeTitle(path) {
        switch (path) {
            case '/index/schedule':
                return '课程表';
            case '/index/extend':
                return '扩展功能';
            case '/index/profile':
                return '个人';
            default: return '扩展功能';
        }
    }
</script>

<style scoped>
    .nav-bar span {
        font-weight: bold;
        color: white;
    }
    .nav-bar-arrow{
        color: white;
    }
</style>