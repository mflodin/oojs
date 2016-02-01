(function () {
    var Widget = app.Widget;

    var Button = app.Button = Object.create(Widget);

    Button.setup = function setup(opts) {
        this.label = opts.label;
        this.el = document.createElement('button');
        this.el.innerHTML = opts.label;
        this.init(opts);
    };
})();
