# AngularAMD


 * angularjs + require +angularAMD 实现angular的按需加载



code here :+1:
#### 1.配置[ require ](http://www.ruanyifeng.com/blog/2012/11/require_js.html)  
>* 1.定义模块路径 angular angular-ui-router angularAMD ngLoda
>* 2.重新定义每个非amd规范模块的引用对象 shim
>* 3.定义当前模块依赖读取配置自动加载[app.js]()
```javascript
require.config({
    paths: {
        "angular": '/libs/angular/angular',
        "angular-ui-router": '/libs/angular-ui-router/release/angular-ui-router',
        "angularAMD": "/libs/angularAMD/angularAMD",
        "ngload": "/libs/angularAMD/ngload"
    },
    shim: {
        "angular": { exports: "angular" },
        "angular-ui-router": ['angular'],
        "angularAMD": ["angular"],
        "ngload": ["angularAMD"]
    },
    deps: ['app']
})

```
#### 2.定义路由并启动angularApp  
 >* app依赖  angularAMD angular-ui-router
 >* require自动引入，发现angularAMD和angular-ui-router在require config里依赖angular
 >* 所以加载顺序是 main->app->angular>angularAMD>angular-ui-router
 >* ***按需引入路由 调用angularAMD.route方法 定义模板和控制器
 >* ***手动启动angular
```javascript
define([
    'angularAMD',
    'angular-ui-router'
], function (angularAMD) {
    var app = angular.module('app', ['ui.router']);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', angularAMD.route({
            url: "/home",
            templateUrl: "/gwas-single/view/home.html",
            controller: "HomeCtr",
            controllerUrl: "/gwas-single/view/homeController.js"
        }))
            .state('about', angularAMD.route({
                url: "/about",
                templateUrl: "./view/about.html",
                controller: "AboutCtr",
                controllerUrl: "./view/aboutController.js"
            }))
    })
    return angularAMD.bootstrap(app)
});


```
#### 3.template和controller  

```javascript
//homeController.js
define([
    'app'
], function(app) {
    app.controller('HomeCtr',['$scope',function($scope){
        $scope.title='this is HomePage'
    }])
});

//html
<div>
    <a ui-sref="about">{{title}}</a>
</div>

```

### 4.service
//toolService.js
```javascript
define(['app'],function(app){
    app.service('myService',function(){
        this.greeting=function(name){
            console.log('hello:'+name);
        }
    })
})

```
//main.js(定义路径)
```javascript
        "toolService": "./gwas-single/src/script/service/toolService"
```

//homeController.js
```javascript
define(['app','toolService'],function(app){
    app.controller('HomeCtr',['$scope','myService',homeFn]);
    function homeFn($scope,myService){
        myService.greeting('joke');
        //hello:joke
    }
})
```


