import { db, auth } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

function fetchUser() {
    return getDoc(doc(db, 'users', `${auth.currentUser.uid}`))
}

export { fetchUser };