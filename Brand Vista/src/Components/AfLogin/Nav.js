import { Person } from '@mui/icons-material';
import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material';
import { Sprout } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideDrawer from '../SideDrawer/SD1';
const Nav = () => {
const nav = useNavigate();
  return (
    <AppBar sx={{backgroundColor:'white'}}>
                <Toolbar>
                  <SideDrawer/>
                    <Sprout color="purple" />
                    <Typography variant='h6' sx={{"&:hover":{cursor:"pointer"}, flexGrow:1, fontFamily:"sans-serif", color:'purple',fontWeight:'bold'}}>BRAND VISTA</Typography>
                    <Stack direction='row'>
                        <Person sx={{marginTop:'4px', color:'purple'}}/>
                        <Typography variant='h6' sx={{"&:hover":{cursor:"pointer"}, flexGrow:1, fontFamily:"sans-serif", color:'purple',fontWeight:'bold'}}>Felix</Typography>
                        </Stack>
                        <Stack direction='row' spacing={3}>
                            <h1>  </h1>
                        <Button onClick={()=>{nav('/')}} color='inherit' variant='outlined' sx={{":hover":{backgroundColor:'rgb(237, 232, 232)', color:'purple'} ,color:'white', backgroundColor:'purple'}}>Log Out</Button>
                        </Stack>
                </Toolbar>
    </AppBar>
  )
}
export default Nav;