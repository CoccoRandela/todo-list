import { makeHeader, makeButton, makeList, makeProject, makeProjectForm } from "../components";
import projectList from "../../models/project-list";
import './styles.css'
import { renderForm } from "../handlers";

export function component() {
    const content = document.querySelector('.content');
    const header = makeHeader('Projects','project-list-head');
    const list = makeList(projectList.get(), 'projects-container', makeProject);  
    const button = makeButton('new-project-btn', () => renderForm(makeProjectForm, content));
    header.append(button)
    content.append(header, list);
}