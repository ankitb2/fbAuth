import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APP_ID
}

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.error(e);
      alert(e.message);
    }
};

const registerWithEmailAndPassword = async (email, password) => {
    try {
      const response = await auth.createUserWithEmailAndPassword(email, password);
      return response
    } catch (e) {
      console.error(e);
      alert(e.message);
    }
};

const logout = () => {
    auth.signOut();
};

export {
    auth,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
};