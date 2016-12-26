/* 存在依赖关系的自定义函数模块 */
define(["status"], function(data) {
    var html = function(y) {
        return data.OddOrEven(y) ? "偶数" : "奇数";
    };

    return {
        OrE: html
    };
});