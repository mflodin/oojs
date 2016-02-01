(function () {
    var Widget = app.Widget;

    var Container = app.Container = Object.create(Widget);

    Container.setup = function setup(opts) {
        this.el = document.createElement('div');
        this.init(opts);
    };
})();
