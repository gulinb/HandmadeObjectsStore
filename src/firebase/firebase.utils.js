import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDJXUH6ajPzWso_9m-kVzO2s7oAGGiYuO8",
    authDomain: "ecommerce-db-4b567.firebaseapp.com",
    databaseURL: "https://ecommerce-db-4b567.firebaseio.com",
    projectId: "ecommerce-db-4b567",
    storageBucket: "ecommerce-db-4b567.appspot.com",
    messagingSenderId: "405984893709",
    appId: "1:405984893709:web:728c91c910a480d282ee44"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    const snapShot = await userRef.get()
    
    if(!snapShot.exists){
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message)
        }
    }
    return userRef
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase
