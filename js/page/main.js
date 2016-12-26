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

            bb : function() { /* backbone的使用 */
                require(["backbone"], function(Backbone) {
                    var person = Backbone.Model.extend({
                        defaults: {
                            hello: "",
                            text: "wonderful"
                        }
                    });
                    var man = new person();
                    man.set("hello", "hello world");
                    $("#tip4").html(man.get("hello") + "<br/>" +
                                    man.get("text") + "<br/>");
                });
            },

            init: function() {/* 初始化 */
                this.json();
                this.max();
                this.oddEven();
                this.bb();
            }
        }
        $(function() {
            mainConctrol.init();
        });        
    });
})();