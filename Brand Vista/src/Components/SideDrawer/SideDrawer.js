import { Facebook, HomeOutlined, Instagram, LinkedIn, WhatsApp, YouTube } from "@mui/icons-material";
import { Button, Drawer, ListItem, ListItemIcon } from "@mui/material";
  
  const data = [
    {name: "Home",icon: <HomeOutlined />,},
    { name: "Instagram", icon: <Instagram sx={{color:'#db1f57'}}/>, },
    { name: "LinkedIn", icon: <LinkedIn sx={{color:'darkblue'}} /> },
    { name: "YouTube", icon: <YouTube sx={{color:'red'}}/> },
    { name: "Facebook", icon: <Facebook sx={{color:'blue'}}/> },
    {name: "WhatsApp" ,icon: <WhatsApp sx={{color:'green'}}/>}
  ];
  
  function SideDrawer() {
    // const [wid, setWid] = useState(60);
  
    const getList = () => (
      <div>
        {data.map((item, index) => (
          <ListItem key={index}>
            <Button>
            <ListItemIcon sx={{color:"purple"}}>{item.icon}</ListItemIcon>
            {/* <ListItemText primary={item.name} /> */}
            </Button>
          </ListItem>
        ))}
      </div>
    );
    return (
      <div>
        {/* <ChevronRight color="primary" onClick={() => setOpen(true)}/> */}
        <Drawer open={true} anchor={"left"} sx={{width:"50px"}}>
          {getList()}
        </Drawer>
      </div>
    );
  }
  
  export default SideDrawer;