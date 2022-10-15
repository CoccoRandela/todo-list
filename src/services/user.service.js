import { db, auth } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

function fetchUserDoc() {
    return getDoc(doc(db, 'users', `${auth.currentUser.uid}`))
}

function createUserDoc(credentials) {
    return setDoc(doc(db, 'users', `${credentials.user.uid}`), {
        email: credentials.user.email,
        projects: []
    })

}

function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export { fetchUserDoc, login, createUser, createUserDoc };