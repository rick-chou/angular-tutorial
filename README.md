## 写在前面

由于最近工作的转变 技术栈也由 React 向 Angular 进行了切换

回想自己最初进入前端这个领域 在实习公司的第一个项目还是 AngularJs

后来的两年 我又转了 Vue 和 React 原来技术的轮回就是一个圈 🤣

所以本系列是作者在学习 Angular2.0+ 过程中写下的一些笔记

主要是通过一个简单的项目 带你进入一下 Angular 的世界

如果想要快速深入了解某个方面的知识点 官方文档都已经写的很清楚了

> <a href="https://angular.io/">Angular EN</a>

> <a href="https://angular.cn/">Angular CN</a>

> 我会一直维护这个教学项目 保持最新的 ng 版本 并不断把一些 ng 的 feature 补充进去 对于本文也会一直做补充

下面进入正题

## ng-cli / project 配置

### 初始化 Angular 项目

首先安装 Angular CLI

```zsh
npm install -g @angular/cli
```

然后运行 `ng new xxx` 就可以快速创建一个 angular 项目了

下面我主要介绍两个文件 一个是 angular.json 还有一个是 environment 文件

### angular.json

这是 angular 项目的配置文件 我摘取了一些比较重要的配置

```json
"architect": {
  "build": {
    "builder": "@angular-devkit/build-angular:browser",
    "configurations": {
      "production": {
        // ...
      },
      "development": {
        // ...
      }
    },
    "defaultConfiguration": "production"
  },
  "serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "configurations": {
      "production": {
        "browserTarget": "ng-tutorial:build:production"
      },
      "development": {
        "browserTarget": "ng-tutorial:build:development"
      }
    },
    "defaultConfiguration": "development"
  },
  "test": {
    "builder": "@angular-devkit/build-angular:karma",
  }
}
```

这是 package.json 中的配置 可以对照着来看

```json
"scripts": {
  "ng": "ng",
  "start": "ng serve",
  "build": "ng build",
  "watch": "ng build --watch --configuration development",
  "test": "ng test"
},
```

可以看到 start / build / test 这三个命令和 angular.json 中 architect 下的三个字段是对应上的

这就是这三个字段就是启动命令的一些配置信息

一般的我们的项目 通常有 development / production 两个环境

当我们启动项目的时候通常会走命令配置告诉项目用哪个配置

我们可以在命令行中输入 `ng serve --help`

然后你会看到这个命令中有一个 option 是 -c, --configuration

```text
 -c, --configuration       One or more named builder configurations as a comma-separated list as specified in the
                            "configurations" section in angular.json.
                            The builder uses the named configurations to run the given target.
                            For more information, see
                            https://angular.io/guide/workspace-config#alternate-build-configurations.
```

所以我们启动项目的时候 其实应该是 `ng server -c development` 启动 dev mode 或者是 `ng server -c production` 启动 prod mode

但是我们看到 script 中的命令并没有带上任何 option 来指定环境

这时候再看会 `angular.json` 可以看到在每一个指令的 Object 下都有一个 `defaultConfiguration` 来指定默认的 option

所以开发环境的 `ng server` 默认启用的是 development 模式 而构建项目的 `ng build` 则默认是 production 模式

注意 -c 后面的字段要和 angular.json 中的字段对齐 不能想当然的简写成 dev

### environment

同样的也是 `angular.json` 中的配置 我们看到有一条是

```json
"production": {
  "fileReplacements": [
    {
      "replace": "src/environments/environment.ts",
      "with": "src/environments/environment.prod.ts"
    }
  ],
},
```

即在 production 模式下把 `environment.ts` 替换成 `environment.prod.t`

所以平时在使用的时候 我们只需要引入`environment.t`这个文件就好了 然后更具启动项配置去做到引入不同的 environment 文件

### 引入 tailwind css

> reference https://tailwindcss.com/docs/guides/angular

1. 引入依赖

```zsh
npm install -D tailwindcss postcss autoprefixer
```

2. 生成 tailwind 配置文件并修改

```zsh
npx tailwindcss init
```

```js
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

3. 在 styles.css 全局 css 入口处加入

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🎉

angular-tutorial demo 已经上线了 可以在线查看啦 （ 功能就一丢丢 还在补充中 👨‍💻 ）

> https://rick-chou.github.io/angular-tutorial/


![Screen Shot 2022-08-12 at 11.27.03.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/adcb15fc3b344ae4a5d976d3c8402341~tplv-k3u1fbpfcp-watermark.image?)

Get Start 可以查看一些 library 在 angular 中 demo

例如 monaco-editor

![Screen Shot 2022-08-12 at 11.29.15.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a779efeab9b4bc6879d5e384003fb41~tplv-k3u1fbpfcp-watermark.image?)

Basic Syntax 可以看到一些基础语法的用法

![Screen Shot 2022-08-12 at 11.23.04.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a120c32f14a846239d618fcf32dfeead~tplv-k3u1fbpfcp-watermark.image?)