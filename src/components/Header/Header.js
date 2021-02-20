import { Avatar, Button, IconButton } from '@material-ui/core'
import Brightness7RoundedIcon from '@material-ui/icons/Brightness7Rounded';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import React, { useState } from 'react'
import { Menu } from "@material-ui/icons";

import "../../scssFiles/main.scss"

import SideDrawer from './SideDrawer/SideDrawer';
import { Link, useHistory } from 'react-router-dom';

function Header() {

    const history = useHistory();
    const [sideDrawer, setSideDrawer] = useState(false);

  const  sideDrawerClosedHandler = () => {
        setSideDrawer(false);
      };
    
   const  sideDrawerToggleHandler = () => {
       setSideDrawer(!sideDrawer); 
      };

    return (
        <div className="header">
            <div className="header-container">

            
                <div className="header-nav">
                   
                   <div className="header-nav-toggle">
                
                     <IconButton className="header-menu-button" onClick={sideDrawerToggleHandler}>
                    <Menu  className="text-black" />
                     </IconButton>
                     
                        <SideDrawer
                              open={sideDrawer}
                              closed={sideDrawerClosedHandler}
                       />
                   </div>
                 
                 <Link className="header-link" to="/" >
                 <div className="header-logo">
                    <h1>PasteRock.io</h1>
                    <p>Responsive Cut, Copy & Paste </p>
                     </div> 
                     </Link>

                 <Button className="header-nav-button" 
                 onClick={e => history.push("/newpaste")}>PasteBin</Button>     
                 <Button className="header-nav-button" >Url Shortner</Button>     
                 <Button className="header-nav-button" 
                 onClick={e => history.push("/link")} >MediaHost</Button>     
                </div>
                
                <div className="header-login">

                 {/* <Button className="header-nav-login-button">Login</Button> */}
                 
                    <div className="header-dark-theme">
                      
                      <Brightness7RoundedIcon fontSize="small" />
                        <Brightness3Icon fontSize="small" />
                      </div>
                      <Link to="login">
                    <IconButton  >
                     <Avatar src="https://www.filmibeat.com/img/popcorn/profile_photos/ram-pothineni-20181009094946-4105.jpg" className="header-avatar" />
                 </IconButton>
                 </Link>

                </div>
            </div>
        </div>
    )
}

export default Header
