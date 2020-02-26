//引入提示组件
import { Toast } from "vant";
//引入路由
import router from "../router";
//引入缓存操作工具
import storage from "../model/storage";

//引入axios
import axios from 'axios';
// 设置axios的基本配置
axios.defaults.baseURL = 'http://xiajibagao.top:8080/curriculum/';
axios.defaults.timeout = 3000;

/*
* 为Axios实例添加响应和请求拦截器
* */
function interceptors(AxiosInstance){
    //请求拦截
    AxiosInstance.interceptors.request.use(
        config => {

            //从缓存获取cookie
            let cookie =  storage.get("cookie");
            if (!storage.contains("cookie")){
                Toast.fail("用户未登录！");
                router.push("/login");
            }

            //如果cookie存在，则为请求头添加cookie
            config.headers = {
                'JSESSIONID' : cookie
            };

            return config;
        }, error => {
            return Promise.reject(error);
        });

    //响应拦截
    AxiosInstance.interceptors.response.use(
        response => {

            //获取响应信息
            if (response.data.status === "error"){
                //如果请求出错
                console.log("请求错误！" + response.data.msg);
                Toast.fail(response.data.msg);

                //如果是cookie过期,就回登录页面
                if (response.data.code === 1003){
                    router.push("/login");
                }

                return Promise.reject(response.data.msg)
            }else {
                //请求成功
                return Promise.resolve(response.data.data);
            }

        }, error => {
            return Promise.reject(error);
        });
}

/*
* 请求登录
* */
export function requestLogin(config) {
    //创建一个axios实例
    let axiosInstance = axios.create({
        url: 'user/login',
        method: 'post'
    });

    //添加拦截器
    axiosInstance.interceptors.response.use(
        response => {

            //获取响应信息
            if (response.data.status === "error"){
                //如果请求出错
                console.log("登录失败！" + response.data.msg);
                Toast.fail(response.data.msg);
                return Promise.reject(response.data.msg)
            }else {
                //如果登录成功，就把用户信息存入缓存
                let cookie = response.data.data.JSESSIONID;
                console.log("登录成功！JessionId：" + cookie);
                //存入cookie
                storage.set("cookie", cookie);
                //存入登录信息
                let user = {
                    'userAccount': config.params.userAccount,
                    'userPassword': config.params.userPassword,
                    'userName': response.data.data.userName
                };
                storage.set("user", user);

                return response.data.data;
            }

        }, error => {
            return Promise.reject(error);
        });

    //返回实例
    return axiosInstance(config);
}

/*
* 获取课程表
* */
export function requestSchedule(config) {
    //创建一个axios实例
    let axiosInstance = axios.create({
        url: 'api/listCourseSchedule',
        method: 'get'
    });

    //添加拦截器
    interceptors(axiosInstance);

    //返回实例
    return axiosInstance(config);
}

/*
* 获取课成绩
* */
export function requestScore(config) {
    //创建一个axios实例
    let axiosInstance = axios.create({
        url: 'api/listCourseScore',
        method: 'get'
    });

    //添加拦截器
    interceptors(axiosInstance);

    //返回实例
    return axiosInstance(config);
}

/*
* 获取考场
* */
export function requestExam(config) {
    //创建一个axios实例
    let axiosInstance = axios.create({
        url: 'api/listExamSchedule',
        method: 'get'
    });

    //添加拦截器
    interceptors(axiosInstance);

    //返回实例
    return axiosInstance(config);
}