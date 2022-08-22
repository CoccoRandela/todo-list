import { makeHeader, makeButton, makeList, makeProjectForm } from "../components";
import projectList from "../../models/project-list";
import './styles.css'
import { renderForm, renderProjectItem } from "../handlers";

export function component() {
    const content = document.querySelector('.content');
    const header = makeHeader('Projects','project-list-head');
    const list = makeList(projectList.get(), 'projects-container', renderProjectItem);  
    const button = makeButton('new-project-btn');
    button.onclick = () => renderForm(makeProjectForm, content);
    header.append(button)
    content.append(header, list);
}