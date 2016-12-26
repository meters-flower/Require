;(function() {
    require(["jQuery"], function() {
        mainConctrol = {
            json: function() {/* 显示json格式数据*/
                require(["json"], function(json) {
                    $("#tip1").html(json.name + "<br/>" + 
                                    json.sex + "<br/>" + 
                                    json.email + "<br/>");
                });
            },

            max: function() {/* 将输入框中的最大值显示出来 */
                require(["max"], function(max) {
                        $("#btn").click(function() {
                            var a = $("#text1").val(),
                                b = $("#text2").val(),
                                m = max.Max(a, b);
                            $("#tip2").html("最大值为：" + m);
                        });
                });
            },

            oddEven: function() { /* 显示输入框中的值的奇偶性 */
                require(["str"], function(str) {
                        $("#btn2").click(function() {
                            var a = $("#text3").val();
                                n = str.OrE(a);
                            $("#tip3").html("您输入的是：" + n);
                        });
                });
            },

            init: function() {
                this.json();
                this.max();
                this.oddEven();
            }
        }
        $(function() {
            mainConctrol.init();
        });        
    });
})();