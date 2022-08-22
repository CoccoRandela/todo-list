import projectList from "../../models/project-list";
import { component as renderProject } from "../indexes/single-project-view";
import { removeChildren } from '../handlers/removeChildren'

export function makeProject(project) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    const title = document.createElement('p');
    title.textContent = project.name;
    title.addEventListener('click', () => {
        removeChildren(document.querySelector('.content'))
        renderProject(project)
    })
    const button = document.createElement('button');
    button.addEventListener('click', () => {
        deleteProject(project, projectDiv)
    })
    button.textContent = 'delete';
    projectDiv.append(title, button)
    return projectDiv;
}

export function appendProject(project) {
    const projectsContainer = document.querySelector('.projects-container');
    const projectDiv = makeProject(project);
    projectsContainer.append(projectDiv);
}

function deleteProject(project, div) {
    projectList.removeProject(project);
    div.remove();
}