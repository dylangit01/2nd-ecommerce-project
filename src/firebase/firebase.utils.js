import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCGf5I8QAxMZPi6pdJTJBfBHT4LwJ4ubqk",
    authDomain: "second-ecommerce-db.firebaseapp.com",
    databaseURL: "https://second-ecommerce-db.firebaseio.com",
    projectId: "second-ecommerce-db",
    storageBucket: "second-ecommerce-db.appspot.com",
    messagingSenderId: "788292678892",
    appId: "1:788292678892:web:d016b3fad5e8da476961c9",
    measurementId: "G-YDWF4DNT58"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const sigInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
