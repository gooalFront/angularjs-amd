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

/**
 * app依赖  angularAMD angular-ui-router
 * require自动引入，发现angularAMD和angular-ui-router在require config里依赖angular
 * 
 * 所以加载顺序是 main->app->angular>angularAMD>angular-ui-router
 * 
 * ***按需引入路由 调用angularAMD.route方法 定义模板和控制器
 * ***手动启动angular
 */