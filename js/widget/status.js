/* 自定义函数模块 */
define(function() {
    var num = function(x) {
        return x % 2 == 0;
    };

    return {
        OddOrEven: num
    };
});