import app from 'firebase/app'
import 'firebase/auth'; 
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyC-7Hhf3qzHAQ3Eh9sH5rvnZm9kmic_mhc",
    authDomain: "react-test-firebase-461b1.firebaseapp.com",
    databaseURL: "https://react-test-firebase-461b1.firebaseio.com",
    projectId: "react-test-firebase-461b1",
    storageBucket: "react-test-firebase-461b1.appspot.com",
    messagingSenderId: "164794236920",
    appId: "1:164794236920:web:d06bf4a2101864214ba00d"
  };

class Firebase {
    constructor(){
        app.initializeApp(config)
        
        this.auth=app.auth()
        this.db=app.firestore()
    }
signupUser=(email,password)=>
this.auth.createUserWithEmailAndPassword(email,password)

loginUser=(email,password)=>
this.auth.signInWithEmailAndPassword(email,password)

signOutUser=()=>this.auth.signOut()

passwordForget=(email)=>this.auth.sendPasswordResetEmail(email)

user=userid=>this.db.doc(`users/${userid}`)


}
export default Firebase