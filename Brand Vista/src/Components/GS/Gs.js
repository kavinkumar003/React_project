import { Button } from '@mui/material';
import axios from 'axios';
import { Sprout } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login1/Login1.css';
const Form = ()=>{
    const navi = useNavigate();
    const [form,setForm] = useState({
        name:'',
        phone:'',
        email:'',
        uname:'',
        passwd:''
    })
    const addLogin = ()=>{
        axios.post('http://localhost:3001/login',{
        name: form.name,
        email: form.email,
        pass: form.passwd
        })
        .then(
            res=>{
              alert('Sign up succesful');
              console.log("success");
            }
          )
          .catch(
            err=>{
              console.log(err)
            }
          )
    }
    const upForm = (e)=>{
        setForm({...form,[e.target.id]:e.target.value})
    }
    const hSub = (e)=>{
        e.preventDefault();
        console.log(form);
    }
    return(
        <div className='body1' align = "center">
            <form className='form' onSubmit={hSub}>
                <br/>
                <h1><Sprout/>Join Vista</h1>
                <input className="inp" id="name" type = "text" placeholder="NAME" onChange={upForm} value={form.name} required></input>
                <input className="inp" id="phone" type = "number" placeholder='PHONE' onChange={upForm} value={form.phone} required></input>
                <input className="inp" id="email" type = "email" placeholder='EMAIL' onChange={upForm} value={form.email} required></input>
                <input className="inp" id="passwd" type = "password" placeholder='PASSWORD' onChange={upForm} value={form.passwd} required></input>
                <br/>
                <Button onClick={()=>{addLogin();navi('/Aflogin')}} type='submit' color='inherit' variant='outlined' sx={{":hover":{backgroundColor:'rgb(237, 232, 232)', color:'purple'} ,color:'white', backgroundColor:'purple'}}>SIGN Up</Button>
                <br/>
            </form>
        </div>
    )
}
export default Form;