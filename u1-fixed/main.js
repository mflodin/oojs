function hello() {
    console.log("Hello " + this.name);
}
var name = "glolbal";

hello(); // Hello glolbal

var me = {
    name: "Martin",
    hello: hello,
    myself: {
        i: {
            hello: hello
        }
    }
};

me.hello(); // Hello Martin
me.myself.i.hello(); // Hello undefined

hello.call(me); // Hello Martin
hello.apply(me); // Hello Martin
hello.bind(me)(); // Hello Martin

var glenn = {
    name: 'Glenn'
};

me.hello.call(glenn); // Hello Glenn
me.hello.apply(glenn); // Hello Glenn

var boundHello = me.hello.bind(glenn);
me.boundHello = boundHello;

me.boundHello(); // Hello Glenn

me.boundHello.call(me); // Hello Glenn
me.boundHello.bind(me)(); // Hello Glenn

new me.boundHello(); // Hello undefined