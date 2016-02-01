(function () {
    var Widget = app.Widget;

    var TodoItem = app.TodoItem = Object.create(Widget);

    TodoItem.setup = function setup(opts) {
        this.el = document.createElement('li');
        this.el.innerHTML = opts.todo;
        this.init(opts);

        this.on('click', function removeTodo() {
            this.el.remove();
        }.bind(this));
    };


})();
