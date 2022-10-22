import { Typography } from '@mui/material'
import React from 'react'

function Signup() {
  return (
    <div>
        <Typography
        sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
          alignItems='center'
        >
        <h1>SUCCESFULLY REGISTERED</h1>
        
        </Typography>


    </div>
  )
}

export default Signup