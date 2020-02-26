# 简单课程表APP

#### 介绍
基于vue与vantui的简单课程表app

#### 软件架构
~~~xml
|--src
   |--assets //静态资源
   |--components //通用组件，包括标签栏TabBar和底部栏NavBar
   |--model //localStorage的工具类
   |--network //封装的网络请求
   |--router //vue路由
   |--store //vuex
   |--views //视图
      |--Login //登录页面
      |--Index //主页
         |--Extend //扩展功能页面
            |--ExtendMeun //扩展功能菜单的组件
            |--ExtendFunction //具体的扩展功能实现页面
         |--Profile //个人信息页面
         |--Schedule //课表页面
~~~




#### 安装教程

~~~npm
npm install
~~~



#### 使用说明

1. 该项目只是一个前台，使用时需要开启后台服务器使用（ [简单课程表后台](https://gitee.com/cheng_xing_huang/simple_curriculum_background)）

   或者模拟各视图文件夹下的xxxData.js数据使用
