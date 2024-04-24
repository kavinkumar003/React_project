import { Button } from '@mui/material';
import axios from 'axios';
import { Sprout } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login1.css';
const Form = ()=>{
    const [formV,setFormV] = useState('');
    useEffect(()=>{
        axios.get('http://localhost:3001/login')
        .then(res=>{
            setFormV(res);
        })
    })
    const[Password,setPassword]=useState('');
    const[Email,setEmail]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.get(`http://localhost:3001/login`)
        .then(res=>{
          if(res.data.length > 0){
            alert('Logged in successfully')
          }
          else{
            alert("invalid info")
          }
       }
       )
       navi('/Aflogin');
    }
    const navi = useNavigate();
    return(
            <div className='body1' align = "center">
                <form className='form'>
                    <br/>
                    <h1><Sprout/>Welcome Back</h1>
                    <input className="inp" name={formV} id="Email" type = "email" placeholder='EMAIL' value={Email} onChange={(event)=>{setEmail(event.target.value)}} required></input>
                    <input className="inp" id="Password" type = "password" placeholder='PASSWORD' value={Password} onChange={(event)=>{setPassword(event.target.value)}} required></input>
                    <br/>
                    <Button onClick={handleSubmit} color='inherit' variant='outlined' sx={{":hover":{backgroundColor:'rgb(237, 232, 232)', color:'purple'} ,color:'white', backgroundColor:'purple'}}>SIGN IN</Button>
                    <br/>
                    <label>Don't Have an Account ? SIGN UP</label>
                    <br/>
                </form>
            </div>
    )
}
export default Form;