(function () {
    var Widget = app.Widget;

    var Input = app.Input = Object.create(Widget);

    Input.setup = function setup(opts) {
        this.placeholder = opts.placeholder;
        this.el = document.createElement('input');
        this.el.placeholder = opts.placeholder;
        this.init(opts);
    };

    Input.value = function value() {
        return this.el.value;
    };

    Input.clear = function clear(){
        this.el.value = '';
    };
})();
