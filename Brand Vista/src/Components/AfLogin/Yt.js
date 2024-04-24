import React from 'react';
import Foot from '../Footer/Foot';
import "./Afl.css";
import Nav from './Nav';
import Ytb from "./Yt.png";

const Yt = () => {
  return (
    <div>
        <Nav/>   
        <div className='bodyal'>
          <div style={{marginTop:"100px"}}>
            <img src={Ytb} alt='YtMark' width='100%' height='100%'/>
            <Foot/>
          </div>
         </div>
    </div>
  )
}

export default Yt;
