export class Todo {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;
    }

    checkpoints = [];

    checkCompleted() {
        this.complete = true;
    }

    addCheckpoint(description) {
        this.checkpoints.push(description)
    }

    removeCheckpoint(description) {
        this.checkpoints = this.checkpoints.filter(
            element => element !== description
        );
    }
}