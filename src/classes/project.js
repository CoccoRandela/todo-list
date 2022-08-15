export class Project {
    constructor(name) {
        this.name = name;
    }

    todos = [];

    addTodo(todo) {
        this.todos.push(todo);
    };

    removeTodo(todo) {
        this.todos = this.todos.filter(
            item => item !== todo
        );
    }
}