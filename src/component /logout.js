
import React,{useState,useEffect,useContext} from "react"
import {FirebaseContext} from "../Firebase"

const Logout=(props)=>{
    const [checked,setChecked]=useState(false)
    const firebase=useContext(FirebaseContext)

useEffect(()=>{
    if(checked){
        firebase.signOutUser()
    }

},[checked,firebase])
const handelChange=(event)=>{
setChecked(event.target.checked)
}
    return (
        <div>

<label class="switch">
  <input type="checkbox" checked={checked} onChange={handelChange}/>
  <span class="slider round"></span>
</label>
        </div>
    )
}
export default Logout