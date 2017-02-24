# xyy-vue

>一个前端基于Vue2.0+vue-router+vuex+axios，后端基于Express+Leancloud的前后端分离项目。前端界面使用了flexbox+flexible+rem布局。本项目可以作为一个前端进阶项目，从前端flexbox布局到手淘flexible的使用，再到后端以及数据库，是一个打通前后端流程的一个项目。欢迎大家前来star。如果有任何问题，可以给我留言，我们互相学习讨论，一起进步。此Demo还在不断完善......

[项目地址](http://hjingren.cn/)

##### 请使用移动端浏览

###前端的所使用的技术栈:

* es6
* vue2
* vue-router2
* vuex
* webpack2
* axios
* sass

###后端
* node
* express
* Leancloud

####you can get:
* vuex

> 个人理解这其实就是一个发布订阅的模式

> mutation-types 记录我们所有的事件名

> mutations 注册我们各种数据变化的方法

> actions 则可以编写异步的逻辑或者是一些逻辑，再去commit我们的事件 触发事件和传入参数

> 如果有getter 我们可以把一些需要处理返回的数据放在这即可，不进行业务操作

* dialog、loading组件

* axios的封装

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
