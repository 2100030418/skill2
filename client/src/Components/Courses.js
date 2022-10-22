import React from 'react' 
 
import {useState,useEffect} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import {Card, CardContent} from "@material-ui/core";
function Courses() { 
  const [studList,setStudList]=useState([]);
  useEffect(()=>{
    axios.get("/display").then((response)=>{
      setStudList(response.data);
    })
  },[]);
  const deleteStud=(id)=>{
    axios.delete(`/delstud/${id}`);
    
  }
  return ( 
    <div> 
    
     
     <h1 className='text'>SIGNUP CREDENTIALS</h1>
          {studList.map((val,key)=>{
      return <div id="table" key={key}>
        <Box
                sx={{
                  marginTop: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
        <table className='chinnu'>
          <tr>
            <td><h3>First NAME={val.fname}</h3>
            <h3>LAST NAME={val.lname}</h3>
            <h3>EMAIL={val.email}</h3>
            <h3>PASSWORD={val.password}</h3><br/>
            <button onClick={()=>deleteStud(val._id)}>Delete the credentials</button>
            </td></tr></table>
            </Box>
            </div>
            })}
            

     
        </div>
  ) 
  
} 
 
export default Courses