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
   |--data.js //游客登录时的模拟数据
~~~




#### 安装教程

~~~npm
npm install
~~~



#### 使用说明

1. 该项目只是一个前台，使用时需要开启后台服务器使用（ [简单课程表后台](https://gitee.com/CreateSequence/simple_curriculum_background)）

2. 如果要试用话，可以使用默认账号密码登录：

   ~~~java
   账号：123456
   密码：123456
   ~~~

   当使用此账号登录时，默获取src文件夹下的data.js数据使用，当清空缓存时会触发网络请求，由于虚拟账号无法实际登录，所以会返回首页。因此最好不要清空缓存。
