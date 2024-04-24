import React from 'react';
import Foot from '../Footer/Foot';
import Navbar from '../Navbar/Navbar';
import pic1 from './Collage.png';
import mainpic from './Content.jpg';

import './Home.css';

const Home = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div style={{marginTop:'65px'}}>
          <img src={mainpic} height='690px' width = '100%'  alt = 'Welcome Text'/>
          <img src={pic1} width='100%' height='800px' alt = 'Get Started Text'/>
        </div>
        <div>
          <Foot/>
        </div>
    </div>
  )
}

export default Home;
