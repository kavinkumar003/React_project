import React from 'react';
import Foot from '../Footer/Foot';
import "./Afl.css";
import Fbook from './Fbook.png';
import Nav from './Nav';

const Fb = () => {
  return (
    <div>
        <Nav/>   
        <div className='bodyal'>
          <div style={{marginTop:"100px"}}>
            <img src={Fbook} width='100%' height='100%' alt='FbMark'/>
          </div>
            <Foot/>
         </div>
    </div>
  )
}

export default Fb;
