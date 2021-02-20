
import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import { Avatar, IconButton } from '@material-ui/core'


import "./SideDrawer.scss"
import { Close } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

function SideDrawer({ open , closed}) {

    let attachedClasses = "side-drawer close";
  if (open) {
    attachedClasses = "side-drawer open" ;
  }

    return (
        <div>
            <Backdrop show={open} clicked={closed} />
            <div className={attachedClasses} show={open}>
 
                <div className="side-drawer-login" >
               
                  
                    <IconButton>
                     <Avatar src="https://www.filmibeat.com/img/popcorn/profile_photos/ram-pothineni-20181009094946-4105.jpg" className="side-drawer-avatar" />
                 </IconButton>

                 <NavLink className="side-drawer-link" to="/login" onClick={closed}> <span className="side-drawer-button" >Login</span> </NavLink>
                
                 <Close onClick={closed} fontSize="large"  className="side-drawer-close" />
                </div>
                <hr />

               <nav className="side-drawer-nav" >
               <NavLink className="side-drawer-link" to="/newpaste" onClick={closed}> <span className="side-drawer-button" >PasteBin</span> </NavLink>
               <NavLink className="side-drawer-link" to="/login" onClick={closed}> <span className="side-drawer-button" >Url Shortner</span> </NavLink>
               <NavLink className="side-drawer-link" to="/link" onClick={closed}> <span className="side-drawer-button" >MediaHost</span> </NavLink>

               </nav>
                
               <div className="side-drawer-logo">
                    <h1>PasteRock.io</h1>
                    <p>Responsive Cut, Copy & Paste </p>
                     </div> 
               </div>
                
                
         </div>   
    )
}

export default SideDrawer
