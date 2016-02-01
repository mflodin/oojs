(function () {
    var Widget = app.Widget;
    var TodoItem = app.TodoItem;

    var TodoList = app.TodoList = Object.create(Widget);

    TodoList.setup = function setup(opts) {
        this.el = document.createElement('ol');
        this.init(opts);
    };

    TodoList.addItem = function addItem(todo) {
        var todoItem = Object.create(TodoItem);
        todoItem.setup({todo: todo});
        this.el.appendChild(todoItem.el);
    }


})();
