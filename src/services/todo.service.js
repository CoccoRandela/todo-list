import { db } from "./firebase"
import { doc, arrayRemove, updateDoc, deleteDoc } from "firebase/firestore"

function deleteTodofromDatabase(todo) {
    deleteDoc(doc(db, 'todos', `${todo.id}`))
    .then(() => {
        updateDoc(doc(db, 'projects', `${todo.projectId}`), {
            todos: arrayRemove(`${todo.id}`)
        })
    })
}

export { deleteTodofromDatabase }