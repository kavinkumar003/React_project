import React from 'react';
import Foot from '../Footer/Foot';
import "./Afl.css";
import Insta from "./Insta.png";
import Nav from './Nav';

const Ins = () => {
  return (
    <div>
        <Nav/>   
        <div className='bodyal'>
          <div style={{marginTop:"100px"}}>
            <img src={Insta} alt='InsMark' width='100%' height='100%'/>
            <Foot/>
          </div>
         </div>
    </div>
  )
}

export default Ins;
