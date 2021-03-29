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


//   export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//     const collectionRef = firestore.collection(collectionKey)
    
//     const batch = firestore.batch()
//     objectsToAdd.forEach(obj => {
//         const newDocRef = collectionRef.doc()
//         batch.set(newDocRef, obj)
//     })

//     return await batch.commit()
// }

//   export const convertCollectionsSnapShotToMap = (collections) => {

//         const transformedCollections = collections.docs.map(doc => {

//         const {title, elemente}= doc.data()
//           return {
//               title,
//               elemente,
//               id: doc.id,
//               routeName: encodeURI(title.toLowerCase())

//           }
//       })
   
//     return transformedCollections.reduce((accumulator, collection) =>{
//         accumulator[collection.title.toLowerCase()] = collection
//         return accumulator
//     }, {})
//   }

//   export const addElement = async (collectionId, element) => {
    
    
//     const elementRef = firestore.collection('produse').doc(`${collectionId}`)
//     const elemente1 = await elementRef.get()
//     const elemente = elemente1.data().elemente
//     return (
//       elementRef.update({
//       elemente : [...elemente, element]
//   })
//   .then(function() {
//       console.log("Document successfully written!");
//   })
//   .catch(function(error) {
//       console.error("Error writing document: ", error);
//   })
//   )

// }


// export const removeElement = async (collectionId, element) => {
  
//   const elementRef = firestore.collection('produse').doc(`${collectionId}`)
//   const elemente1 = await elementRef.get()
//   const elemente = elemente1.data().elemente
//   return (
//     elementRef.update({
//       elemente : elemente.filter(item => item.name !== element.name)
//     })
//     .then(function() {
//       console.log("Document successfully written!");
//     })
//     .catch(function(error) {
//       console.error("Error writing document: ", error);
//     })
//     )
    
//   }
  

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  // export const firestore = firebase.firestore()

  export default firebase
