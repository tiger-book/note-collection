# 071 EggJs开篇

teacher的源码资料：https://wwa.lanzoui.com/idIbiu9vfxi

```js
/*
1.什么是Egg.js?
- Express是基于ES5的web开发框架
- Koa1.x是Express原班人马打造的基于ES6的web开发框架
- Koa2.x是Express原班人马打造的基于ES7的web开发框架
- Egg是'阿里爸爸'基于Koa的'有约束和规范'的'企业级web开发框架'
- 三个框架之间的关系其实是一部'编程界的进化论'

2. Egg.js发展史
2013 年蚂蚁的 chair 框架，可以视为 egg 的前身。
2015 年 11 月，在苏千的召集下，阿里各 BU(Business Unit) 的前端骨干齐聚黄龙，闭门共建。
2016 年中，广泛使用在绝大部分阿里的前端 Node.js 应用。
2016 年 09 月，在 JSConf China 2016 上亮相并宣布开源。
2017 年初，官网文档 egg - 为企业级框架和应用而生 亮相，并将在本月发布 egg@1.0 版本。

3.Egg.js在阿里的应用
- 阿里旗下蚂蚁金服，天猫，UCWeb，村淘，神马搜索等项目的基础框架都是在 egg 之上扩展的
上图
上图

4.为什么是Egg, 而不是Express或Koa?
4.1  Express 和 Koa没有约束和规范, 会导致团队的沟通成本和项目的维护成本变高
     EggJS有约束和规范, 会大大降低团队的沟通成本和项目的维护成本
4.2  阿里内部大量企业级项目使用egg开发, 实践出真知
4.3  Node社区5位国人核心贡献者4人在阿里, 技术有保障
4.4  阿里前端安全专家，负责 egg-security 等类库, 安全有保障
     ... ...

5.什么是有约束和规范?
和ESLint检查JS代码一样, 有一套标准, 必须严格遵守这套标准 ,否则就会报错
https://eggjs.org/zh-cn/basics/structure.html

6.什么是MVC?
M(Model)     :处理应用程序'数据逻辑'的部分(service)
V(View)      :处理数据显示的部分(静态/动态网页)
C(Controller):处理应用程序业务逻辑, 数据和页面的桥梁(controller)

推荐阅读: https://github.com/atian25/blog/issues/18
* */
```

