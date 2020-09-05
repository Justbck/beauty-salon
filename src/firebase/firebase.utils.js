import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
                apiKey: "AIzaSyAsjayB9x1X3vXJfa3CezAgYL3Sh4_F5XE",
                authDomain: "salon-jb.firebaseapp.com",
                databaseURL: "https://salon-jb.firebaseio.com",
                projectId: "salon-jb",
                storageBucket: "salon-jb.appspot.com",
                messagingSenderId: "537334794486",
                appId: "1:537334794486:web:5cd2b5347f31dc2aad84d7",
                measurementId: "G-4SDPMV321Z"

};


export const createUserProfileDocument = async (userAuth,additionalData) => {
        
        if(!userAuth) return;
        
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();
        
        if(!snapShot.exists) {
                const { displayName, email } = userAuth;
                const createdAt = new Date();

                try {

                await userRef.set({
                        displayName,
                        email,
                        createdAt,
                        ...additionalData
                })

                } catch (error) {
                        console.log('error creating user', error.message)

                }
        }
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;









