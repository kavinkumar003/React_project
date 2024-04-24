import React from 'react';
import Foot from '../Footer/Foot';
import ImageButton from '../ImgBtn/ImgBtn';
import "./Afl.css";
import Nav from './Nav';

const Aflogin = () => {
  // const navi = useNavigate();
  return (
    <div>
        <Nav/>   
        <div className='bodyal'>
          <div style={{marginTop:"100px"}}>
            <h2 style={{color:'purple'}}>Dwelve into the world of digital marketing!</h2>
            <ImageButton/>
            <h2 style={{color:'purple'}}>And Many More...</h2>
            <Foot/>
          </div>
         </div>
    </div>
  )
}

export default Aflogin;
