    "use strict";
    function hello() {
        console.log("Hello " + this.name);
    }
    var name = "glolbal";

   hello();

    var me = {
        name: "Martin",
        hello: hello,
        myself: {
            i: {
                hello: hello
            }
        }
    };

    me.hello();
    me.myself.i.hello();

    hello.call(me);
    hello.apply(me);

    hello.bind(me)();

me.hello.call(you);
me.hello.apply(you);

var boundHello = me.hello.bind(you);
me.boundHello = boundHello;

me.boundHello();

me.boundHello.call(me);
me.boundHello.bind(me)();

