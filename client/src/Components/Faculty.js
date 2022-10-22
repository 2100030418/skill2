import React from 'react'
import { Box } from '@mui/system'
import image1 from './images/image1.jpg'
import image2 from './images/image4.jpg'
import {Card, CardContent} from "@material-ui/core";
import Avatar from '@mui/material/Avatar';
import { Typography } from "@mui/material";
import { Paper } from '@mui/material';

function Faculty() {
  
  const mb=[{ 
    "img":<img src={image1}alt=''/>, 
    "NAME":"ABCD", 
    "ID":12345, 
    "QUALIFICATION":"PHD", 
    "IS PERMANENT":true,
    "DESIGNATION":"VC"
}, 
{ 
    "img":<img src={image2} alt=''/>, 
    "NAME":"MURALI MOHAN ", 
    "ID":12346, 
    "QUALIFICATION":"PHD", 
    "IS PERMANENT":true,
    "DESIGNATION":"CC"
}]
  return (  
    <Box 
    sx={{
      marginTop: 5,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
    <div>   
       
      <Paper elevation={3}>
      <CardContent>
          <Avatar 
        alt="Remy Sharp"
        src= {mb.map((mb) => (<h6 key={mb.NAME}>{mb.img}</h6>))}
        sx={{ width: 180, height: 170,marginLeft:2 }}
      /><Typography variant='h7'>
     <h2> KL University</h2>
     {mb.map((mb) => (<h6 key={mb.id}><br/> NAME:{mb.NAME}<br/>ID NUMBER:{mb.ID}<br/>QUALIFICATION:{mb.QUALIFICATION}<br/> 
        IS PERMANENT: {mb['IS PERMANENT']
     ?"Yes" : "No"}</h6>))} 

        </Typography>
      </CardContent>
      </Paper>
    
     

    </div> 
    </Box>  
  )
}

export default Faculty