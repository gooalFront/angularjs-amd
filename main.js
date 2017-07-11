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


/**
 * 1.定义模块路径 angular angular-ui-router angularAMD ngLoda
 * 2.重新定义每个非amd规范模块的引用对象 shim
 * 3.定义当前模块依赖
 * 
 * 
 * 整个模块加载前会依赖 app.js 默认路径跟mainjs 同级
 * 
 * 先加载app （.js可省略）
 */
