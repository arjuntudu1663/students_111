import React,{useState,useEffect,useContext} from 'react'
import { Button,TextField } from '@mui/material'
import {Card} from 'react-bootstrap'
import { auth, provider, signInWithPopup,logOut } from '../firebase';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth';

const Login = ({setDrawerFlag}) => {
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

    const registerWithGoogle = async function(){
          
       try{

        
        const response = await signInWithPopup(auth,provider);
        console.log(response.user.accessToken,"<=== sign in with google response")
        if(response.user.accessToken){
             
            localStorage.setItem("user",response.user.accessToken)
            window.location.reload();
        }
        
          
       }catch(e){

       }

       
    }

    const signInWithPassword = async function(e){
       e.preventDefault()
      try{
          if(registerDetails.password === registerDetails.re_password){
            const response = await createUserWithEmailAndPassword(auth,registerDetails.email,registerDetails.password)
            console.log(response,"<=== firebase authentication")
          }
      }catch(e){
          console.log(e)
      }

    }

    const signWithGoogle = async function(){
          
      try{

       
       const response = await signInWithPopup(auth,provider);
       console.log(response.user.accessToken,"<=== sign in with google response")
       if(response.user.accessToken){
            
           localStorage.setItem("user",response.user.accessToken)
           window.location.reload();
       }
       
         
      }catch(e){

      }

      
   }

   const loginWithGoogle = async function(e){
      e.preventDefault()
     try{
         if(registerDetails.password === registerDetails.re_password){
           const response = await signInWithEmailAndPassword(auth,loginDetails.email,loginDetails.password)
           console.log(response,"<=== firebase authentication")
         }
     }catch(e){
         console.log(e)
     }

   }
    
    const login_org = function(){}
    const register_org = function(){}
   
  
    const loggingOut = async function(){
       
      localStorage.removeItem("user");
      logOut();
      window.location.reload()

    }
    

    let element ; 

    switch(flag){
        
      case "login":
        element = <Card  style={{padding:"15px",display:"grid",placeItems:"center"}}>
          <h1>Login</h1>
          <p></p>
          Don’t have an account? <Button onClick={e=>setFlag("register")} style={{fontWeight:"bold"}}>Get Started</Button>
          <p></p>
        <TextField onChange={e=>setLoginDetails((prev)=>{
          return {...prev,username:e.target.value}
        })} id="filled-basic" label="username" variant="filled" style={{width:"50%"}} />
   
       <p></p>
       <TextField onChange={e=>setLoginDetails((prev)=>{
          return {...prev,password:e.target.value}
        })} id="filled-basic" label="password" variant="filled" style={{width:"50%"}} />
        <p></p>
      
        <Button onClick={loginWithGoogle} style={{width:"50%"}} variant='contained' color='success'>Login</Button>
        <p></p>
      
        <p></p>
       
    
         </Card>
         break;
  
      case "register":
  
      element=<Card style={{padding:"15px",display:"grid",placeItems:"center"}}>
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
   
      <Button style={{width:"50%"}} onClick={registerWithGoogle} variant='contained' color='success'>Register</Button>
      <p></p>
      <Button variant='outlined' onClick={e=>setFlag("login")}>Already Have A Account?</Button>
      <p></p>

      <Button onClick={e=>signWithGoogle()}>with google</Button>
      <p></p>
      
      
       
  
  
       </Card>
       break;
         
   
  
    }
  
    useEffect(()=>{ 
       
        if(localStorage.getItem("user")){
        
        } 

       console.log(s,"<== curr status")
    },[])

  return (
    <div> 

    <div style={{width:"100%",display:"grid",placeItems:"center"}}>
           
          
           <div style={{width:"40%",marginTop:"100px"}}>
              
           {localStorage.getItem("user")?<><Button variant='outlined' color='success' onClick={e=>setDrawerFlag(true)}>Menu</Button></>:<></>}
               <p></p>
               
               <p></p>
               {localStorage.getItem("user")?<>
                
                <Card style={{padding:"15px"}}>
                    
                   <h1> Youre currently Logged In </h1>
                  <Card.Footer>
                  <Button variant='contained' color='error' onClick={loggingOut}>LogOut</Button>
                  </Card.Footer>

                </Card>
               
               </>:<>  <Card style={{padding:"15px"}}>
                    
                    <h1> Youre currently Logged Out </h1>
                   <Card.Footer>
                   <Button variant='contained' color='success' onClick={signWithGoogle}>Log In With Google</Button>
                   </Card.Footer>
 
                 </Card></>}
           </div>

         
        

    </div>

    </div>
  )
}

export default Login