import React from 'react'
import Header from '../Header/Header'
import { CopyIcon } from "../../svgfiles/svgIcon"
import {   IconButton, OutlinedInput, useMediaQuery, useTheme } from '@material-ui/core'
import "./LinkPage.scss"
import { AddRounded } from '@material-ui/icons'
import Footer from "../Footer/Footer"
import Community from '../Community/Community'


function LinkPage() {

    const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div className="link-page">
            <Header />
           <div className="link-page-add">

           </div>
          
           <div className="link-page-box"> 
           
           <div className="link-page-title">
             <div className="link-page-title-item">
              
              <input type="text" className="link-page-title-disabled" placeholder="Your Title" disabled />
              <span className="link-page-size">Size</span>

             </div>

             <div className="link-page-copy">
              
              <span className="link-page-copy-span">https://pagerock.io/tag</span>
              <IconButton className="link-page-icon-button">

              <CopyIcon className="link-page-copy-icon" />
              </IconButton>

             </div> 
           </div> 

           <OutlinedInput multiline rows={ isTablet? 15 : 20 } className="link-page-box-input" fullWidth />
         </div>

            <div className="link-page-or">OR</div>

            <div className="link-page-button">
                <div className="link-page-button-icon">
                 <AddRounded fontSize="large" className="button-rounded" />
                </div>

                <div className="link-page-button-paste">
                  <span>New Paste</span>
                </div>
            </div>

            <div className="link-page-line"></div>

            <Community linkPage />
            <Footer linkPage /> 
        </div>
    )
}

export default LinkPage
