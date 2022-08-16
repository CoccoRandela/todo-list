import { Project } from "./project";

function createProjectList() {
    return new Array;
}

function populateProjectList() {
    return JSON.parse(localStorage.getItem('list'));   
}

function populateProjectListStorage(list) {
    localStorage.setItem('list', JSON.stringify(list))
}

export function addProject(list, name) {
    const project = new Project(name);
    list.push(project);
}

function removeProject(list, project) {
    list = list.filter(
        item => item !== project
    );
}


