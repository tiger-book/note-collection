# 63 VueRouter命名视图

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>66-VueRouter-命名视图</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .onepage, .twopage{
            width: 200px;
            height: 200px;
        }
        .onepage{
            background: pink;
        }
        .twopage{
            background: skyblue;
        }
        .nj-active{
            background: skyblue;
        }
    </style>
    <script src="js/vue.js"></script>
    <!--1.导入Vue Router-->
    <script src="js/vue-router.js"></script>
</head>
<body>
<!--
1.什么是命名视图?
命名视图和前面讲解的具名插槽很像, 都是让不同的出口显示不同的内容
命名视图就是当路由地址被匹配的时候同时指定多个出口, 并且每个出口中显示的内容不同
-->
<!--这里就是MVVM中的View-->
<div id="app">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <!--和匿名插槽一样, 如果指定了多个router-view, 那么当路由地址被匹配之后, 多个router-view中显示的内容是一样的-->
    <!--<router-view></router-view>
    <router-view></router-view>-->
    <!--和具名插槽一样, 如果想同时显示多个不同的组件, 那么可以给出口指定名称
        1.在路由规则中给组件起名称
        2.在出口中指定显示哪个名称的组件-->
    <router-view name="name1"></router-view>
    <router-view name="name2"></router-view>
</div>
<template id="one">
    <div class="onepage">
        <p>我是第一个界面</p>
    </div>
</template>
<template id="two">
    <div class="twopage">
        <p>我是第二个界面</p>
    </div>
</template>
<script>
    // 1.定义组件
    const one = {
        template: "#one",
    };
    const two = {
        template: "#two"
    };
    // 2.定义切换的规则(定义路由规则)
    const routes = [
        // 数组中的每一个对象就是一条规则
        {
            path: '/',
            components: {
                name1: one,
                name2: two
            }
        },
    ];
    // 3.根据自定义的切换规则创建路由对象
    const router = new VueRouter({
        routes: routes,
        linkActiveClass: "nj-active"
    });
    // 这里就是MVVM中的View Model
    let vue = new Vue({
        el: '#app',
        // 4.将创建好的路由对象绑定到Vue实例上
        router: router,
        // 这里就是MVVM中的Model
        data: {
        },
        // 专门用于存储监听事件回调函数
        methods: {
        },
        // 专门用于定义计算属性的
        computed: {
        },
        // 专门用于定义局部组件的
        components: {
            one: one,
            two: two
        }
    });
    // console.log(vue.$route);
</script>
</body>
</html>
```

