import React,{useState,useContext, useDebugValue, useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {FirebaseContext} from "../Firebase"
import {Link} from "react-router-dom"


const Example = (props) => {
 
const firebase=useContext(FirebaseContext)
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [btn,setBtn]=useState(false)
const [error,setError]=useState('')

useEffect(()=>{
    if(password.length>5 && email !==""){
        setBtn(true) 
    }else if(btn){
      setBtn(false)
    }
},[password,email,btn])


const handelSubmit=(e)=>{
 e.preventDefault();
 firebase.loginUser(email,password)
 .then(user=>{
  console.log("user",user)
    setEmail('')
    setPassword('')
    props.history.push('/welcome')


 }).catch(error=>{
    setError(error)
    setEmail('')
    setPassword('')

 })
}
  return (
    <>
    <h2 >{error !==""&&<span>{error.message}    </span>}</h2>
    <Form className="form-validation" onSubmit={handelSubmit}>
          
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email"onChange={(e)=>setEmail(e.target.value)} value={email} 
          placeholder="with a placeholder" autoComplete="off" required/>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password"onChange={(e)=>setPassword(e.target.value)}  value={password} 
         placeholder="password placeholder"autoComplete="off" required />
      </FormGroup>
      
  {btn?<Button>connexion</Button>:<Button disabled>connexion</Button>}
     <span>if you don't have an account ?</span> <Link to='/register'>Register</Link>
     <br/>
     <span>Mot de passe oublié?</span> <Link to='/forgetpassword'>Récuperer</Link>
    </Form>

    </>
  );
}

export default Example;