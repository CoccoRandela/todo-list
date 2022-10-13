import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { fetchUser } from "./user.service";

function fetchAllProjects() {
    return fetchUser()
    .then((userDoc) => {
        const projectsIds = userDoc.data().projects;
        const projectsProms = projectsIds.map(id => getDoc(doc(db, 'projects', `${id}`)))
        return Promise.all(projectsProms)
    })
    .then(snapshots => {
        const projects = snapshots.map(s => ({...s.data(), id: s.id}))
        return projects
    })
}

export { fetchAllProjects };