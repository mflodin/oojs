(function () {
    var Widget = app.Widget;

    var Button = app.Button = Object.create(Widget);

    Button.setup = function setup(width, height, className, label) {
        this.label = label;
        this.el = document.createElement('button');
        this.el.innerHTML = label;
        this.init(width, height, className);
    };
})();
