import { makeHeader, makeList, makeButton, makeTodo } from "../components";

export function component(project) {
    const content = document.querySelector('.content');
    const header = makeHeader(project.name, 'project-head')
    const list = makeList(project.todos, 'todo-container', console.log('yo'));
    const button = makeButton('new-todo-btn', makeTodo);
    header.append(button)
    content.append(header, list);
}