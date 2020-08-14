# 简单课程表APP

## 介绍
基于vue与vantui的简单课程表app。提供简单的学期课表展示和成绩查询。

<img src="http://img.xiajibagao.top/Screenshot_20200815_005616_io.dcloud.H59118B10-1597424651062.jpg" style="zoom:25%;" /><img src="http://img.xiajibagao.top/Screenshot_20200815_005631_io.dcloud.H59118B10-1597424674739.jpg" style="zoom:25%;" /><img src="http://img.xiajibagao.top/Screenshot_20200815_005640_io.dcloud.H59118B10.jpg" style="zoom:25%;" /><img src="http://img.xiajibagao.top/Screenshot_20200815_005657_io.dcloud.H59118B10.jpg" style="zoom:25%;" /><img src="http://img.xiajibagao.top/Screenshot_20200815_005703_io.dcloud.H59118B10.jpg" style="zoom:25%;" /><img src="http://img.xiajibagao.top/Screenshot_20200815_005717_io.dcloud.H59118B10.jpg" style="zoom: 25%;" />



## 软件架构
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




## 安装教程

~~~npm
npm install
~~~



## 下载地址

安卓：[简单课程表](http://xiajibagao.top/down/%E9%BD%90%E5%B7%A5%E5%A4%A7%E8%AF%BE%E7%A8%8B%E8%A1%A8.apk)



## 使用说明

1. 该项目只是一个前台，后台代码请查看 [简单课程表后台](https://gitee.com/CreateSequence/simple_curriculum_background)。试用APP使用的是我个人的服务器；

2. 目前只针对齐鲁工业大学教务管理系统适配；

3. 如果要试用话，可以使用默认账号密码登录：

   ~~~java
   账号：123456
   密码：123456
   ~~~

   当使用此账号登录时，默获取src文件夹下的data.js数据使用，当清空缓存时会触发网络请求，由于虚拟账号无法实际登录，所以会返回首页。因此最好不要清空缓存。

