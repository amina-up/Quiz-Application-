import React,{useState, useEffect,useContext}from "react"
import {FirebaseContext} from "../Firebase"
import Logout from './logout'
import Home from "./home"


const FirstPage = (props) => {
    const [userSession,setUserSession]=useState(null)
const [userdata,setUserData]=useState({})
const firebase=useContext(FirebaseContext);
useEffect(()=>{
  let listner= firebase.auth.onAuthStateChanged(user=>{
       user?setUserSession(user):props.history.push("/")
   }) 

   if(!!userSession)
{
    firebase.user(userSession.uid).get().then((doc)=>{
        if(doc&&doc.exists){
        const myData=doc.data()
        setUserData(myData)
        }
           }).catch((erreur)=>{
        console.log(erreur)
           })
}  
    return()=>{
listner()
    }
     
},[userSession])
    return userSession ===null?(
        <>
        <div class="loader"></div>

    
    </>
    ):(
    <>
    <h1>Welcome</h1>
    <Logout/>
    <Home userData={userdata}/>
 
    </>
)

}
export default FirstPage