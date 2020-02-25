<template>
    <van-row class="profile">
        <van-col span="24"class="profile-conten">

            <!--账号信息-->
            <div class="profile-group">
                <van-cell-group>
                    <span slot="title" class="profile-group-title">账户</span>
                    <van-cell>
                        <span slot="title">用户名：{{ userName }}</span>
                    </van-cell>
                    <van-cell>
                        <span slot="title">学号：{{ userAccount }}</span>
                    </van-cell>
                </van-cell-group>
            </div>

            <!--通用-->
            <div class="profile-group">
                <van-cell-group>
                    <span slot="title" class="profile-group-title">通用</span>
                    <van-cell @click="clearLocalStorage()">
                        <a slot="title">清除数据缓存</a>
                        <span>解决数据一直获取不到</span>
                    </van-cell>
                    <van-cell>
                        <span @click="checkVersion()" slot="title">版本号</span>
                        <span>V1.0.0</span>
                    </van-cell>
                    <van-cell @click="feedback()">
                        <span slot="title">意见反馈</span>
                        <span>跟作者吐槽</span>
                    </van-cell>
                </van-cell-group>
            </div>


            <!--按钮-->
            <div class="profile-group">
                <van-cell-group>
                    <span slot="title"/>
                    <van-cell class="profile-group-button" @click="quit()">
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
    import {Toast} from 'vant';
    import storage from "../../../model/storage";

    export default {
        name: "Profile",
        data() {
            return {
                userName: '',
                userAccount: ''
            };
        },
        methods: {
            clearLocalStorage() {
                storage.remove("schedules");
                storage.remove("scores");
                Toast.success("已清除缓存！")
            },
            checkVersion() {
                Toast.success('已经是最新版本')
            },
            feedback(){
                Toast.fail("反馈不了的，别点了")
            },
            quit() {
                storage.remove("user");
                storage.remove("schedules");
                storage.remove("scores");
                this.$router.push("/login")
            }
        },
        mounted() {
            let user = storage.get("user");
            this.userName = user.userName;
            this.userAccount = user.userAccount;
        }
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