function Person(name) {
    this.name = name;
    this.hi = function hi() {
        console.log('Hi ' + this.name);
    }
}

var martin = new Person("Martin");

martin.hello = function () {
    console.log('Hello ' + this.name);
};

var glenn = {
    name: "Glenn"
};
martin.hi();
martin.hello();

martin.hi.bind(glenn)();
martin.hi.call(glenn);