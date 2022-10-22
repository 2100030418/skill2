import React from 'react'
import { Button } from '@mui/material'
import axios from "axios";
import { useState } from 'react';
import { Box } from '@mui/system'
function Quote() {
    const [quote,setQuote]=useState('')
    const getQuote=()=>{
        axios.get("https://api.quotable.io/random")
        .then(res=>{
            setQuote(res.data.content)
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <Box
    sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
    <div>
        <Button variant="contained"
        color="primary"
        onClick={getQuote}>Generate Quote</Button>
        <p>{quote}</p>
    </div>
    </Box>
  )
}

export default Quote