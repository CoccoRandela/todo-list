import { db, auth } from "./firebase";
import { doc, getDoc, updateDoc, addDoc } from "firebase/firestore";
import { fetchUserDoc } from "./user.service";

function fetchAllProjects() {
    return fetchUserDoc()
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

function add(project) {
    return addDoc(collection(db, 'projects'), project)
    .then(docRef => {
        updateDoc(doc(db, 'users',`${auth.currentUser.uid}`), {
            projects: arrayUnion(docRef.id)
        })
        return docRef;
    })
}

function remove(id) {
    deleteDoc(doc(db, 'projects', `${id}`))
    .then(() => {
        updateDoc(doc(db, 'users',`${auth.currentUser.uid}`), {
        projects: arrayRemove(`${id}`)
        })
    })
}

export { fetchAllProjects, add, remove };