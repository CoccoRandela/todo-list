import { Project } from "./project";

const projectList = {

    list: null,

    populate() {
        return JSON.parse(localStorage.getItem('projects-list'));   
    },
    populateStorage() {
        localStorage.setItem('projects-list', JSON.stringify(this.list))
    },
    addProject(name) {
        const project = new Project(name);
        this.list.push(project);
        this.populateStorage();
        return project;
    }, 
    removeProject(project) {
        this.list = this.list.filter(
            item => item !== project
        );
        this.populateStorage();
    },
    get() {
        if (!this.populate()) {
            this.list = new Array;
            this.populateStorage(this.list);
        } else {
            this.list = this.populate();
        }
        return this.list;
    }
}


export default projectList;




