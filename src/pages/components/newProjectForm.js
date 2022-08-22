import { makeProject } from ".";
import { appendProject } from "./project";

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
        appendProject()
        submitForm();
    })
    form.append(div, button);
    formContainer.append(form)
    return formContainer;
}


function submitForm() {
    const form = document.querySelector('.form-container');
    form.remove();
}