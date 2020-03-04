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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = await firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createAt = new Date()
        
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user', e.message)
        }
    }
    return userRef
};

// Below function is for storing shop data into firebase programmatically, used only once:
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    // below line just register this "collectionKey" into firebase
    const collectionRef = firestore.collection(collectionKey);
    // console.log(collectionRef)

    const batch = firestore.batch();
    // then we using "collectionRef.doc()" to assign UID to each obj of objectsToAdd, then batch them together to
    // create (batch.set) this newDocRef into Firebase
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    });
    // after we set, then we need to return this promise, that is async function, so using "return await"
   return await batch.commit()
};

// Below function is used to get shop data from firebase into our app:
export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    console.log(transformedCollection)
    return transformedCollection.reduce((accumulator, collection)=> {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
        }, {})
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const sigInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
