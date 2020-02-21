<template>
    <van-row class="profile">
        <van-col span="24"class="profile-conten">

            <!--账号信息-->
            <div class="profile-group">
                <van-cell-group>
                    <span slot="title" class="profile-group-title">账户</span>
                    <van-cell>
                        <span slot="title">用户名：黄成兴</span>
                    </van-cell>
                    <van-cell>
                        <span slot="title">学号：201707080061</span>
                    </van-cell>
                </van-cell-group>
            </div>

            <!--通用-->
            <div class="profile-group">
                <van-cell-group>
                    <span slot="title" class="profile-group-title">通用</span>
                    <van-cell>
                        <span slot="title">清除缓存</span>
                        <span>0KB</span>
                    </van-cell>
                    <van-cell>
                        <span slot="title">版本号</span>
                        <span>V1.0.0</span>
                    </van-cell>
                    <van-cell>
                        <span slot="title">意见反馈</span>
                        <span>跟作者吐槽</span>
                    </van-cell>
                </van-cell-group>
            </div>


            <!--按钮-->
            <div class="profile-group">
                <van-cell-group>
                    <span slot="title"/>
                    <van-cell class="profile-group-button">
                        <span slot="title">
                            退出当前账号
                        </span>
                    </van-cell>
                </van-cell-group>
            </div>

        </van-col>
    </van-row>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>
    .profile-group {
        padding-top: 20px;
    }
    .profile-group-title {
        color: var(--main-white);
    }
    .profile-group-button {
        color: var(--main-red);
        text-align: center;
    }
</style>