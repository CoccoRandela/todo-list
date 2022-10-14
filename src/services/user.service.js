import { db, auth } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

function fetchUserDoc() {
    return getDoc(doc(db, 'users', `${auth.currentUser.uid}`))
}

function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

export { fetchUserDoc, login };