import React from 'react';
import bk from './book.jpg';
import cr from './cream.jpg';
import imk from './dress.jpg';
import fur from './furniture.jpg';
import sh from './shoe.jpg';
import wct from './watch.jpg';
// import sp from './sports.jpeg'
import { Grid } from '@mui/material';
import './img.css';
const ImageButton = () => {
  const handleClick = () => {
    alert("Advertisement will be ready shortly.. Report will be generated in the social media pages.");
  };

  return (
    <Grid className="pic" style={{display:'grid', gridTemplateRows:'repeat(2,0.3fr)'}}>
      <Grid
      container style={{display:'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap:'50px',marginLeft:'50px',marginRight:'50px',marginTop:'50px',height:'500px',width:'1350px'}}>
    <button><img
      src={imk} 
      alt="Button"
      onClick={handleClick}
      style={{height:'600px',width:'300px',cursor:'pointer'}}
    /></button>
    
    <button><img
      src={wct}  // Replace with the path to your JPG image
      alt="Button"
      onClick={handleClick}
      style={{height:'600px',width:'300px',cursor:'pointer'}}
    /></button>
    
    <button><img
      src={sh}  // Replace with the path to your JPG image
      alt="Button"
      onClick={handleClick}
      style={{height:'600px',width:'300px',cursor:'pointer'}}
    /></button>
    </Grid><br/><br/>
    <Grid
      container style={{display:'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap:'50px',marginLeft:'50px',marginRight:'50px',marginBottom:'50px',height:'500px',width:'1350px'}}>
    <button><img
      src={cr}  // Replace with the path to your JPG image
      alt="Button"
      onClick={handleClick}
      style={{height:'600px',width:'300px',cursor:'pointer'}}
    /></button>
    
    <button><img
      src={fur}  // Replace with the path to your JPG image
      alt="Button"
      onClick={handleClick}
      style={{height:'600px',width:'300px',cursor:'pointer'}}
    /></button>
    
    <button><img
      src={bk}  // Replace with the path to your JPG image
      alt="Button"
      onClick={handleClick}
      style={{height:'600px',width:'300px',cursor:'pointer'}}
    /></button>
    </Grid>
    {/* <button><img
      src={sp}  // Replace with the path to your JPG image
      alt="Button"
      onClick={handleClick}
      // style={{ cursor: 'pointer' }}
      style={{height:'500px',width:'300px'}}
    /></button> */}
    </Grid>
  );
};

export default ImageButton;