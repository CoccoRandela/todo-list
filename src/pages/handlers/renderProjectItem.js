import { makeProject } from "../components";

export function renderProjectItem(project, appendingEl) {
    const projectDiv = makeProject(project);
    appendingEl.append(projectDiv);
}