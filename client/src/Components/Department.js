import { Box } from '@mui/system'
import React from 'react'
import cse from './images/cse.jpg'
import ece from './images/ece.jpg'
import mech from './images/mech.jpg'
import kl from './images/kllogo.jpg'

function Department1() {
  
    const dep=[
      { 
        
        "img":<img src={kl} width="150" height="150" alt=''/>, 
         
        
    },{ 
        "img":<img src={cse} width="150" height="150" alt=''/>,  
        "name":"CSE", 
        "ftotal":170, 
        "available":true 
    },
    { 
        "img":<img src={ece} width="150" height="150" alt=''/>,  
        "name":"ECE", 
        "ftotal":170, 
        "available":true 
    },
    { 
        "img":<img src={mech} width="150" height="150" alt=''/>,  
        "name":"MECHANICAL", 
        "ftotal":170, 
        "available":true 
    },]

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
    <h1>KL UNIVERSITY</h1>
    {dep.map((dep) => (<h6 key={dep.name}>{dep.img}<br/>NAME:{dep.name}<br/>STRENGTH:{dep.ftotal}<br/> 
        Available: {dep.available 
     ?"Yes" : "No"}</h6>))} 
     </div>
     </Box>
  )
}

export default Department1