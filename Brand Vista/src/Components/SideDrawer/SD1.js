import {
    ChevronRight,
    Facebook,
    HomeOutlined,
    Instagram,
    LinkedIn,
    WhatsApp,
    YouTube
} from "@mui/icons-material";
import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
    
  
  const data = [
    {name: "Home", path:"/Aflogin",icon: <HomeOutlined />,},
    { name: "Instagram", path:"/Ins", icon: <Instagram sx={{color:'#db1f57'}}/>, },
    { name: "LinkedIn", path:"/Ins",icon: <LinkedIn sx={{color:'darkblue'}} /> },
    { name: "YouTube", path:"/Yt",icon: <YouTube sx={{color:'red'}}/> },
    { name: "Facebook", path:"/Fb",icon: <Facebook sx={{color:'blue'}}/> },
    {name: "WhatsApp" ,path:"/Fb",icon: <WhatsApp sx={{color:'green'}}/>}
  ];
    
    function SideDrawer() {
        const navi = useNavigate();
      const [open, setOpen] = useState(false);
      const handleListItemClick = (path) => {
        navi(path);
        setOpen(false);
      };
    
      const getList = () => (
        <div style={{ width: 170 }} onClick={() => setOpen(false)}>
          {data.map((item, index) => (
           <ListItem button key={index} onClick={() => handleListItemClick(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItem>
          ))}
        </div>
      );
      return (
        <div>
          <ChevronRight color="primary" onClick={() => setOpen(true)}/>
          <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
            {getList()}
          </Drawer>
        </div>
      );
    }
    
    export default SideDrawer;