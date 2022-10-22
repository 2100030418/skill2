import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { NavLink } from 'react-router-dom';
import { Paper } from '@mui/material';
import img from './images/Chinnu.jpg';
//import Slider from '@mui/material/Slider';
import Drawer from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Card, CardContent} from "@material-ui/core";
import { useNavigate } from "react-router-dom"
import './register.css'


const theme = createTheme();

export default function SignUp() {
 
  const history = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:3003/register", user)
            .then( res => {
                alert(res.data.message)
                history("/login")
            })
        } 
        else if(!name){
          alert("Enter the name")
        }
        else if(!email){
          alert("Enter the Email")
        }
        else if(!password){
          alert("Enter the password")
        }
        else if(!reEnterPassword){
          alert("Confirm Password")
        }else if(!(password === reEnterPassword)){
            alert("password and confirm-password is not matched")
        }
        
        
  
}
 

  return (
    //<div style={{ backgroundImage: `url(${img})`,backgroundRepeat: 'no-repeat',
        //width:'120%', height:"1000px"  }}>
                
        <div className="register">
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper elevation={6} maxWidth marginTop={20}>
          <Box
            sx={{
              display: 'flex',
              '& > :not(style)': {
                m: 1,
                width: 700,
                height: 580,
                marginTop:0,
              },
            }}
          >
            <Paper elevation={0}  marginTop={20}>
              <Box
                sx={{
                  marginTop: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleChange} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item  sm={12}>
                      <TextField
                        type="text" name="name" required fullWidth value={user.name} placeholder="Your Name" onChange={ handleChange }
                        label="Name"
                      />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <TextField
                      label="email"
                        type="text" name="email" fullWidth required value={user.email} placeholder="Your Email" onChange={ handleChange }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="password"
                        type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="confirm-password"
                        type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }/>
                    </Grid>
                    

                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="Remember me"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                  <Button variant="contained" fullWidth className="button" onClick={register} color='secondary'>Register</Button>
                  </Grid>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <NavLink to='/sign-in'>
                        Already have an account? Sign in
                      </NavLink>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              </Paper>
              </Box>
              </Paper>
             
            </Container>
          </ThemeProvider>
          
         </div>
          );
}