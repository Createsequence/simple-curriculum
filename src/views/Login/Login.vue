<template>
    <div class="login-form">

        <!--标题-->
        <div class="login-title">
            简单课程表
        </div>

        <form>
            <!--输入框-->
            <input type="text" class="login-input login-input-top" placeholder="学号">
            <br>
            <input type="password" class="login-input login-input-bottom" placeholder="密码">

            <!--登录按钮-->
            <div class="login-btn">
                <button type="submit">
                    登录
                </button>
                <div class="login-tip">
                    免责声明
                </div>
            </div>
        </form>

    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                number: '',
                password: ''
            };
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
        background-color: var(--main-white);
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
        background-color: var(--main-white);

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