import { db, auth } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

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

function logout() {
    return signOut(auth)
}

function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

function fetchUser(callback) {
    return onAuthStateChanged(auth, currentUser => callback(currentUser))
}

export { fetchUserDoc, login, logout, createUser, createUserDoc, fetchUser };