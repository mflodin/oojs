(function () {
    var Button = app.Button;
    var Input = app.Input;
    var Container = app.Container;
    var TodoList = app.TodoList;
	window.onload = function onload () {
        function addTodo(evt) {
            evt.preventDefault();
            var value = input.value();
            if(!value) {return;}

            todoList.addItem(value);
            input.clear();
        }

        var toolbar = Object.create(Container);
        toolbar.setup({className: 'toolbar'});
        toolbar.render(document.body);

        var input = Object.create(Input);
        input.setup({placeholder: 'Enter a todo'})
        input.render(toolbar.el);
        input.on('keyup', function (evt) {
            if(evt.which === 13) {
                addTodo(evt);
            }
        });

		var addTodoButton = Object.create(Button);
		addTodoButton.setup({
			className: 'primary',
			label: 'Add todo'
		});

		addTodoButton.on('click', addTodo);
		addTodoButton.render(toolbar.el);

        var todoList = Object.create(TodoList);
        todoList.setup({className: 'todo-list'});
        todoList.render(document.body);





    };
})();