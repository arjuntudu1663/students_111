import React, { useEffect } from 'react'
import { logOut } from '../firebase'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    
    const navigate = useNavigate()

    const logginOut = function(){
        
        localStorage.removeItem("user")
        logOut();
        window.location.reload();

    }

    useEffect(()=>{
       
        if(!localStorage.getItem("user")){
            navigate("/")
        }

    },[])

  return (
    <div style={{display:"grid",placeItems:"center"}}>
         <h1>Dashboard</h1>
         <Button onClick={logginOut}>logout</Button>
    </div>
  )
}

export default Dashboard