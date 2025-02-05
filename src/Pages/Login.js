import React,{useState,useEffect,useContext} from 'react'
import { Button,TextField } from '@mui/material'
import {Card} from 'react-bootstrap'
import { auth, provider, signInWithPopup } from '../firebase';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [flag,setFlag] = useState("login")
    const [s,ss] = useContext(UserContext)
    const navigate = useNavigate()

    const [loginDetails,setLoginDetails] = useState({
      username:"",
      password :""
    })
    const [registerDetails,setRegisterDetails] = useState({
      username:"",
      email:"",
      password :"",
      re_password:""
    }) 

    const signWithGoogle = async function(){
          
       try{

        
        const response = await signInWithPopup(auth,provider);
        console.log(response.user.accessToken)
        if(response.user.accessToken){
             
            localStorage.setItem("user",response.user.accessToken)
            window.location.reload();
        }
        
          
       }catch(e){

       }

       
    }
  
   
  
    const login_org = async function(){
  
      
    }
    const register_org = async function(){
  
      
    }
    

    let element ; 

    switch(flag){
        
      case "login":
        element = <Card style={{padding:"15px"}}>
          <h1>Login</h1>
          <p></p>
        
        <TextField onChange={e=>setLoginDetails((prev)=>{
          return {...prev,username:e.target.value}
        })} id="filled-basic" label="username" variant="filled" style={{width:"50%"}} />
   
       <p></p>
       <TextField onChange={e=>setLoginDetails((prev)=>{
          return {...prev,password:e.target.value}
        })} id="filled-basic" label="password" variant="filled" style={{width:"50%"}} />
        <p></p>
        <Card.Footer>
        <Button onClick={login_org} variant='contained' color='success'>Login</Button>
        <p></p>
        <Button variant='outlined'  onClick={e=>setFlag("register")}>Don't Have A Account?</Button>
        <p></p>
       
        </Card.Footer>
         </Card>
         break;
  
      case "register":
  
      element=<Card style={{padding:"15px"}}>
        <h1>Register</h1>
        <p></p>
        <TextField onChange={e=>setRegisterDetails((prev)=>{
          return {...prev,username:e.target.value}
        })} id="filled-basic" label="username" variant="filled" style={{width:"50%"}} />
      <p></p>
      <TextField onChange={e=>setRegisterDetails((prev)=>{
          return {...prev,email:e.target.value}
        })} id="filled-basic" type='email' label="email" variant="filled" style={{width:"50%"}} />
        <p></p>
      <TextField onChange={e=>setRegisterDetails((prev)=>{
          return {...prev,password:e.target.value}
        })} id="filled-basic" label="password" variant="filled" style={{width:"50%"}} />
      <p></p>
      <TextField onChange={e=>setRegisterDetails((prev)=>{
          return {...prev,re_password:e.target.value}
        })} id="filled-basic" label="re_password" variant="filled" style={{width:"50%"}} />
      <p></p>
      <Card.Footer>
      <Button onClick={register_org} variant='contained' color='success'>Register</Button>
      <p></p>
      <Button variant='outlined' onClick={e=>setFlag("login")}>Already Have A Account?</Button>
      <p></p>

      <Button onClick={e=>signWithGoogle()}>with google</Button>
      <p></p>
      
      
       
      </Card.Footer>
  
       </Card>
       break;
         
   
  
    }
  
    useEffect(()=>{ 
       
        if(localStorage.getItem("user")){
           navigate("/home")
        } 

       console.log(s,"<== curr status")
    },[])

  return (
    <div> 

    <div style={{width:"100%",display:"grid",placeItems:"center"}}>
           
           <div style={{width:"40%",marginTop:"200px"}}>
              
          
             <hr></hr>
               {element}
           </div>
        

    </div>

    </div>
  )
}

export default Login