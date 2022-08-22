import projectList from "../../models/project-list";
import { submitForm, renderProjectItem } from "../handlers";


export function makeForm() {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container')
    const form = document.createElement('form');
    form.classList.add('new-todo-form')
    const div = document.createElement('div');
    const label = document.createElement('label');
    label.textContent = 'Name';
    label.setAttribute('for', 'name');
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'name');
    div.append(label, input);
    const button = document.createElement('button');
    button.textContent = 'Create Project';
    button.setAttribute('type', 'button');
    button.addEventListener('click', () => {
        const project = projectList.addProject(input.value);
        const container = document.querySelector('.projects-container');
        renderProjectItem(project, container);
        submitForm(formContainer);
    })
    form.append(div, button);
    formContainer.append(form)
    return formContainer;
}
