 import React ,{useState ,useContext }from "react"
 import {FirebaseContext} from "../Firebase"

 import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from "react-router-dom"
 const ForgetPassword =(props)=>{

    const [email,setEmail]=useState('')
    const [success,setSecess]=useState(null)
    const [error,setError]=useState(null)

    const firebase=useContext(FirebaseContext)
const handelSubmit=(e)=>{
e.preventDefault();
 firebase.passwordForget(email)
 .then(()=>{
    setError(null)
    setSecess(`consulter votre address email${email}pour changer le mot de passe`)
    setEmail('')

    setTimeout(()=>{
props.history.push('/login')
    },5000)

 }).catch((error)=>{ 
    setError(error)
    setEmail('')
 })
}
const disabled=email===''
     return(
         <div>
             <h2>MOt de passe oublié ?</h2>
             {error&&<h3 style={{border:'1px solid red',background:"red",color:'#ffffff'}}>{error.message}</h3>}
 
  {success&&<h3 style={{border:'1px solid green',background:"green",color:'#ffffff'}}>{success}</h3>}
 <Form className="form-validation" onSubmit={handelSubmit}>
          
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email"onChange={(e)=>setEmail(e.target.value)} value={email} 
              placeholder="with a placeholder" autoComplete="off" required/>
          </FormGroup>
        
          
     <Button disabled={disabled}>Recupérer </Button>
         <span>if you don't have an account ?</span> <Link to='/register'>Register</Link>
        </Form>
         </div>
     )
 }

 export default ForgetPassword