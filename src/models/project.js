export class Project {
    constructor(name) {
        this.name = name;
    }

    todos = [];

    addTodo(todo) {
        this.todos.push(todo);
        this.populateStorage();
    };

    removeTodo(todo) {
        this.todos = this.todos.filter(
            item => item !== todo
        );
        this.populateStorage()
    }

    populate() {
        return JSON.parse(localStorage.getItem(`${this.name}-todos`));   
    }

    populateStorage() {
        localStorage.setItem(`${this.name}-todos`, JSON.stringify(this.todos))
    }
}