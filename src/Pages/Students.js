import React, { useEffect, useState } from 'react'
import { TableCell, TableContainer, TableHead, TableRow ,Table,Button, TableBody,CreateData, TextField} from '@mui/material'
import { Modal } from 'react-bootstrap';
import { LiaEyeSolid } from "react-icons/lia";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { db } from '../firebase';
import { collection,addDoc,getDocs,deleteDoc,doc } from 'firebase/firestore';

const Students = () => { 
    
    function createData(id,name, className, section, rollNo,action) {
        return { id, name, className, section, rollNo,action};
    }
    
    const [modalFlag,setModalFlag] = useState(false)
    const [row,setRow] = useState([])
    const [student,setStudent] = useState({
         id:"",
         name:"",
         class:"",
         section:"",
         roll_no:"",
         
    })
     
    const deleteVal = async (id) => {
        try {
          const todoRef = doc(db, "student_123", id);  // Reference to the specific document
          await deleteDoc(todoRef);  // Delete the document
          getStudents();  // Refresh the list of todos
        } catch (e) {
          console.error("Error deleting document: ", e);
        }
      };

    const addStudent = async function(){
        
        console.log(student)

        try{
             
          const response =    await addDoc(collection(db,"student_123"),student)
        console.log(response)

         }catch(e){
            
            console.log(e)

         }

         window.location.reload()
    }

    const getStudents = async function(){
        
        const querySnapshot = await getDocs(collection(db, "student_123"));
        console.log(querySnapshot.docs)
        const todosArray = querySnapshot.docs.map((doc) => ({ oid: doc.id, ...doc.data() }));
        console.log(todosArray,"<=== console")
        setRow(todosArray)

    }

   useEffect(()=>{
     getStudents()
   },[])


  return (
    <div style={{width:"100%",display:"grid",placeItems:"center"}} >
         
         <div style={{width:"80%",marginTop:"50px"}}>
               
               <div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
                     
                     <div></div>
                     <Button onClick={e=>setModalFlag(true)} variant='contained' color='success' >Add Student + </Button>

               </div>

               <TableContainer>
                    
                    <Table>
                         
                         <TableHead>
                               
                               <TableRow>
                                   
                                   <TableCell>
                                     ID
                                   </TableCell>
                                   <TableCell>
                                     Name
                                   </TableCell>
                                   <TableCell>
                                     Class
                                   </TableCell>
                                   <TableCell>
                                      Section
                                   </TableCell>
                                   <TableCell>
                                      Roll Number
                                   </TableCell>
                                   <TableCell>
                                     Action
                                   </TableCell>
                                   
                               </TableRow>

                             
                               
                         </TableHead>

                         <TableBody>
                              {
                                row.map((x)=>{
                                    return <TableRow>
                                          
                                          <TableCell>
                                             {x.id}
                                          </TableCell>
                                          <TableCell>
                                             {x.name}
                                          </TableCell>
                                          <TableCell>
                                             {x.class}
                                          </TableCell>
                                          <TableCell>
                                             {x.section}
                                          </TableCell>

                                          <TableCell>
                                             {x.rollNo}
                                          </TableCell>
                                          <TableCell >
                                               <div style={{width:"50%",display:"flex",justifyContent:"space-around"}}>
                                               <Button><LiaEyeSolid size={30}/></Button> 
                                               <Button><FaPen size={20} color='green'/></Button>
                                               <Button><MdDelete onClick={e=>deleteVal(x.oid)} size={30} color='red'/></Button>
                                             
                                              
                                               </div>
                                          </TableCell>

                                    </TableRow>
                                })
                              }
                         </TableBody>

                    </Table>
                   

               </TableContainer>

         </div>
         
         <Modal show = {modalFlag} style={{marginTop:"10%"}} >
               
             <Modal.Body>
                   <h4>Add Student</h4>
                  <TextField value={student.id} onChange={e=>setStudent((prev)=>{
                    return {...prev,id:e.target.value}
                  })} style={{margin:"15px"}} placeholder='id'>
                    dawdaw
                   </TextField>
                  
                   <TextField value={student.name} onChange={e=>setStudent((prev)=>{
                    return {...prev,name:e.target.value}
                  })} style={{margin:"15px"}} placeholder='name'>
                    dawdaw
                   </TextField>
                  
                   <TextField value={student.class} onChange={e=>setStudent((prev)=>{
                    return {...prev,class:e.target.value}
                  })} style={{margin:"15px"}} placeholder='class'>
                    dawdaw
                   </TextField>
                 
                   <TextField value={student.section} onChange={e=>setStudent((prev)=>{
                    return {...prev,section:e.target.value}
                  })} style={{margin:"15px"}} placeholder='section'>
                    dawdaw
                   </TextField>
                  
                   <TextField value={student.roll_no} onChange={e=>setStudent((prev)=>{
                    return {...prev,roll_no:e.target.value}
                  })} style={{margin:"15px"}} placeholder='roll Number'>
                    dawdaw
                   </TextField>

                   <Button variant='contained' color='success' onClick={addStudent} style={{margin:"15px"}}>Add</Button>
                   <Button variant='outlined' color='error' style={{margin:"15px"}} onClick={e=>setModalFlag(false)} >Close</Button>
 
             </Modal.Body>


         </Modal>

    </div>
  )
}

export default Students