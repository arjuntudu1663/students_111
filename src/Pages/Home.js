import React, { useState,useEffect } from 'react'
import {Button, Drawer, List, ListItem, ListItemButton} from '@mui/material'
import Login from './Login'
import Dashboard from './Dashboard'
import { useNavigate } from 'react-router-dom'
import Students from './Students'

const Home = () => {
     
  const [drawerFlag,setDrawerFlag] = useState(false)
  const navigate = useNavigate()
  
  const [flag,setFlag] = useState(localStorage.getItem("user")?"dashboard":"login")
  let element ; 

  switch(flag){

    case "students":
        element = <Students setDrawerFlag = {setDrawerFlag}  />
        break;
    case "login":
        element = <Login setDrawerFlag = {setDrawerFlag} />
        break;
    case "dashboard":
        element = <Dashboard setDrawerFlag = {setDrawerFlag} />
  }

   useEffect(()=>{
         
          if(!localStorage.getItem("user")){
               setFlag("login")
          }
  
      },[])

  return (
    <div>

        
        <Drawer  open = {drawerFlag} style={{display:"flex",flexDirection:"column",justifyContent:"space-around",padding:"30px"}}>

            
                    <div style={{width:"100%",display:"flex",justifyContent:"space-between",padding:"",marginTop:"50px"}}>
                         
                         <div></div>
                         <Button style={{marginRight:"10%"}} onClick={e=>setDrawerFlag(false)}>close</Button>

                    </div>
                   
                    <List style={{width:"300px",marginTop:"30%",padding:"10px"}}>

                        <ListItem>
                           <ListItemButton onClick={e=>setFlag("dashboard")} >
                               <p>Dashboard</p>
                           </ListItemButton>
                         </ListItem>
                        
                         <ListItem>
                           <ListItemButton onClick={e=>setFlag("students")} >
                               <p>Students</p>
                           </ListItemButton>
                         </ListItem>
                         <ListItem>
                           <ListItemButton onClick={e=>setFlag("login")} >
                               <p>Login</p>
                           </ListItemButton>
                         </ListItem>
                      
                       
                    </List>
              
            
        </Drawer>

        {element}

    </div>
  )
}

export default Home