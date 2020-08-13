<template>
    <div class="login-form">

        <!--标题-->
        <div class="login-title">
            简单课程表
        </div>

        <div>
            <!--输入框-->
            <input type="text" class="login-input login-input-top" placeholder="学号" v-model="userAccount">
            <br>
            <input type="password" class="login-input login-input-bottom" placeholder="密码" v-model="userPassword">

            <!--登录按钮-->
            <div class="login-btn">
                <button @click="submit()">
                    登录
                </button>
                <div class="login-tip">
                    免责声明
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { requestLogin,isVisitorLogin } from '../../network/request';
    import storage from "../../model/storage";

    export default {
        name: "Login",
        data() {
            return {
                userAccount: '',
                userPassword: ''
            };
        },
        methods: {
            //登录
            submit() {
                //判断是否为游客登录
                if (isVisitorLogin(this.userAccount)) {
                    this.intoIndex();
                    return;
                }

                requestLogin({
                    params: {
                        userAccount: this.userAccount,
                        userPassword: this.userPassword
                    }
                }).then(req => {
                    //成功登录就跳转
                    this.intoIndex();
                });
            },
            intoIndex() {
                this.$router.push("/index")
            }
        }, created() {
            //如果已经登录过，就展示缓存的账号密码
            if (storage.contains("user")){
                let user = storage.get("user");
                console.log("已有用户数据，从缓存中获取");
                requestLogin({
                    params: {
                        userAccount: user.userAccount,
                        userPassword: user.userPassword
                    }
                }).then(req => {
                    //成功登录就跳转
                    this.intoIndex();
                });
            }
        }
    }
</script>

<style scoped>
    .login-form {
        text-align: center;
        background-color: var(--main-blue);
    }
    /*标题*/
    .login-title {
        padding-top: 80px;
        padding-bottom: 70px;
        font-size: 30px;
    }

    /*输入框*/
    .login-input {
        width: 320px;
        height: 40px;

        background: rgba(245, 245, 245, 0.9);
        border: none;
        outline: none;

        padding-left: 10px;
        color: var(--main-blue);
        font-size: 15px;
    }
    .login-input-top {
        border-radius: 7px 7px 0px 0px;
        border-bottom: var(--main-blue) ridge 1px ;
    }
    .login-input-bottom {
        border-radius: 0px 0px 7px 7px;
    }

    /*按钮*/
    .login-btn {
        padding-top: 20px;
        font-size: 14px;
    }
    .login-btn button {
        width: 330px;
        height: 40px;
        background: rgba(245, 245, 245, 0.9);

        border: none;
        border-radius: 7px;
        outline: none;

        color: var(--main-blue);
        font-size: 15px;
        font-weight: bold;
    }
    .login-tip {
        padding-top: 10px;
    }

</style>