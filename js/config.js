require.config({
    baseUrl: "../js", 

    /* 设置需要加载的模块的模块文件名称和对应路径 */
    paths: {
        "jQuery": "lib/jquery-1.8.0.min",
        "underscore": "lib/underscore-min",
        "backbone": "lib/backbone-min",

        //json格式数据
        "json": "widget/json",

        //比较两个数的最大值
        "max": "widget/max",

        //判断一个数的奇偶
        "status": "widget/status",
        "str": "widget/string"
    },

    /* 定义非AMD模块文件的特征 */
    shim: {
        "underscore": {
            exports: "_"
        },
        "backbone": {
            deps: ["underscore", "jQuery"],  //模块的依赖性
            exports: "Backbone"  //模块外部调用时的名称
        }
    }
});