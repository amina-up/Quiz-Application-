import React,{useState,useContext} from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {FirebaseContext} from "../Firebase"
import {Link} from "react-router-dom"

const Example = (props) => {
 
    const data={
        name:"",
        email:"",
        password:"",
        confirmpassword:""

    }
 
    const [loginData,setLOginData]=useState(data)
    const [error,setError]=useState('')
    const firebase=useContext(FirebaseContext)



    const handelChange=(e)=>{
    setLOginData({...loginData,[e.target.id]:e.target.value})

    }

    const handelSubmit=e=>{
      e.preventDefault()
      const {email,password,name}=loginData
      firebase.signupUser(email,password)
      .then((authUser)=>{
       return firebase.user(authUser.user.uid).set({
      name,
         email
       })
      })     
       .then(()=>{
        setLOginData({...data})
      props.history.push('/welcome')
      })
      .catch(err=>{
      setError(err)
         setLOginData({...data})

      })

    }


 const errorMessage= error !=="" &&<span>{error.message}</span>
   

    const {name,email,password,confirmpassword}=loginData

    const btn=name ==='' ||  email ===''|| password ==='' ||password !==confirmpassword
     ?<Button disabled>insription</Button>:<Button>insription</Button>

  return (
    <>
    <h2>{errorMessage}</h2>
    <Form className="form-validation" onSubmit={handelSubmit}>
           <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input type="text" onChange={handelChange} value={name} id="name"  placeholder="with a placeholder"  required/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email"onChange={handelChange} value={email} id="email"  placeholder="with a placeholder"  required/>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password"onChange={handelChange}  value={password} id="password" placeholder="password placeholder" required />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="confirmpassword"onChange={handelChange} value={confirmpassword} type="password"  id="confirmpassword" placeholder="confirmpassword placeholder" required/>
      </FormGroup>
     
     {btn}
     <span>if you have an account ?</span> <Link to='/login'>login</Link>

    </Form>
    </>
  );
}

export default Example;