import React, { useEffect } from 'react'
import { logOut } from '../firebase'
import { Card, Col, Row } from 'react-bootstrap'
import { data, useNavigate } from 'react-router-dom'
import { Button, Paper } from '@mui/material'
import { IoBagOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';


const Dashboard = ({setDrawerFlag}) => {
    
    const navigate = useNavigate()

    const logginOut = function(){
        
        localStorage.removeItem("user")
        logOut();
        window.location.reload();

    }

    const chartSetting = {
      xAxis: [
        {
          label: 'rainfall (mm)',
        },
      ],
      width: 500,
      height: 400,
    };
    

    useEffect(()=>{
       
        if(!localStorage.getItem("user")){
            
        }

    },[])

  return (
    <div style={{display:"grid",placeItems:"center",marginTop:"100px"}}>
          
          <div style={{width:"80%"}} >
          <Button onClick={e=>setDrawerFlag(true)} >Menu</Button>
          
          <div style={{width:"100%"}}>

             <div style={{display:"flex"}}>
                   
                    <Card style={{width:"400px",marginRight:"15px",height:"200px",padding:"15px",backgroundImage:"linear-gradient(to right,white,#84a8ff)",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                        <IoBagOutline color='blue' size={50}/>
                        
                        <div style={{fontWeight:"bold",color:"blue"}}>
                          Weekly Sales
                          <h1>714k</h1>
                        </div>

                    </Card>
                     
                    <Card style={{width:"400px",marginRight:"15px",height:"200px",padding:"15px",backgroundImage:"linear-gradient(to right,white,#d3c1f5)",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                        <CiUser color='blue' size={50}/>
                        
                        <div style={{fontWeight:"bold",color:"blue"}}>
                          New Users
                          <h1>1.35m</h1>
                        </div>

                    </Card>
                     
                    <Card style={{width:"400px",marginRight:"15px",height:"200px",padding:"15px",backgroundImage:"linear-gradient(to right,white,#f4da8a)",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                        <CiShoppingCart color='blue' size={50}/>
                        
                        <div style={{fontWeight:"bold",color:"blue"}}>
                           Purchase Orders
                          <h1>1.72m</h1>
                        </div>

                    </Card>
                     
                    <Card style={{width:"400px",marginRight:"15px",height:"200px",padding:"15px",backgroundImage:"linear-gradient(to right,white,#f4d58a)",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                        <CiMail color='blue' size={50}/>
                        
                        <div style={{fontWeight:"bold",color:"blue"}}>
                           Masseges
                          <h1>234</h1>
                        </div>

                    </Card>

             </div>

          </div>

          <Row style={{marginTop:"55px"}}>
             <Col lg = {4} style={{padding:"15px"}}>
                 
                <Paper elevation={5} style={{width:"100%",height:"100%",padding:"50px"}}>
                <PieChart
          series={[
            {
              data: [
                { id: 0, value: 43, label: 'America' },
                { id: 1, value: 31, label: 'Asia' },
                { id: 2, value: 18, label: 'Europe' },
                { id: 3, value: 6, label: 'Africa' },
              ],
            },
          ]}
          width={400}
          height={200}
        />
                </Paper>
             
             
             </Col>

             <Col lg = {8}>
             <BarChart 
                  xAxis={[{ scaleType: 'band', data: ['Jan','feb','mar','april','may','june','july','aug','sep'] }]}
                  series={[{ data: [1,1,1,1,1,1,1,1,1] }, { data: [2,2,2,2,2,2,2,2,2]}]}
                  width={1000}
                  height={300}
                />

              
             
             
             </Col>
         
         
          </Row>

      


          </div>

    </div>
  )
}

export default Dashboard