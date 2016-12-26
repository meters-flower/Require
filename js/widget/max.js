/* 自定义函数模块 */
define(function() {
    var max = function(x, y) {
        return x > y ? x : y;
    };

    return {
        Max: max
    };
});