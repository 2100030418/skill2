
import React from 'react'
import './App.css'
import { Route,Router,Routes} from 'react-router-dom'
import Department1 from './Components/Department';
import Faculty from './Components/Faculty';
import Navbar from './Components/Navbar'
import Task2 from './Components/Task2';
import Login from './Components/Login';
import Quote from './Components/Quote';
import Id from './Components/Id';
import Home from './Components/Home';
import { useEffect,useState } from 'react';
import Signup from './Components/Signup';
import Feedback from './Components/Feedback';
import Calculator from './Components/Calculator';
import Courses from './Components/Courses';

function App() {

const [ user, setLoginUser] = useState({})
  return (
    
    <div>   
      
   
      
      <Routes>
      
        
        <Route  path='/' element={user && user._id ? <Navbar setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>}/>
       
        <Route path='/login' element= {<Login setLoginUser={setLoginUser}/>}/>
       
        <Route path='/register' element= {<Task2/>}/>
        
      <Route path='DEPARTMENT' element={<Department1/>}/>
    <Route path='FACULTY' element={<Faculty/>}/>
    <Route path='REGISTER' element={<Task2/>}/>
    <Route path='COURSES' element={<Courses/>}/>
    <Route path='Logout' element={<Task2/>}/>
    <Route path='Account' element={<Login/>}/>
    <Route path='Quote' element={<Quote/>}/>
    <Route path='ID' element={<Id/>}/>
    <Route path='CALCULATOR' element={<Calculator/>}/>
    <Route path='/sign-in' element={<Login/>}/>
    <Route path='/A' element={<Task2/>}/>
    <Route path='HOME' element={<Home/>}/>
    <Route path='/Sign' element={<Signup/>}/>
    </Routes>
     
   
        
    
    
    
    
    
    
      
   
    </div>
    
  )
}

export default App