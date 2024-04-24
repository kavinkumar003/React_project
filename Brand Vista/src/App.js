import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aflogin from './Components/AfLogin/Aflogin';
import Fb from './Components/AfLogin/Fb';
import Ins from './Components/AfLogin/Ins';
import Yt from './Components/AfLogin/Yt';
import Gs from './Components/GS/Gs';
import Home from './Components/Home/Home';
import Form from './Components/Login1/Login1';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Form/>}/>
        <Route path="/Gs" element={<Gs/>}/>
        <Route path="/AfLogin" element = {<Aflogin/>}/>
        <Route path="/Ins" element = {<Ins/>}/>
        <Route path="/Yt" element = {<Yt/>}/>
        <Route path="/Fb" element = {<Fb/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;