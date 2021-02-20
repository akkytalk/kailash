import React from 'react'

import {   Button, IconButton, MenuItem, OutlinedInput, useMediaQuery, useTheme } from '@material-ui/core'
import { CopyIcon } from "../../svgfiles/svgIcon"
import Header from "../Header/Header";
import { Icon } from '@iconify/react';
import arrowUpCircleFill from '@iconify-icons/bi/arrow-up-circle-fill';
import LaptopIcon from "../../svgfiles/finance.svg";

import "./NewPaste.scss"
import { SelectValidator, TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import Footer from '../Footer/Footer';

function NewPaste() {

    const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handleFormSubmit = () => {

}

    return (
        <div className="new-paste">
            <Header />

            <div className="paste-mobile">
            <div className="paste-mobile-icons">
              <span className="paste-mobile-size">0.00KB</span> 
              <div className="paste-mobile-copy">
              <span className="paste-mobile-copy-span">https://pasterock.io/tag</span>
              <IconButton className="paste-mobile-icon-button">

              <CopyIcon className="paste-copy-icon" />
              </IconButton>
              </div>
              </div>

              <div className="paste-mobile-title">
              <input type="text" className="paste-mobile-title-disabled" placeholder="Your Title" disabled />
             <OutlinedInput multiline rows={ 15} className="paste-mobile-box-input" fullWidth />

              </div>
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
       
          <div className="new-paste-container">
                
           <div className="new-paste-form">
            <ValidatorForm onSubmit={handleFormSubmit}>

            <TextValidator variant="outlined" 
               label="Paste Title"
               name="title"
               size="small"
               className="new-paste-form-input"
               validators={["required"]}
               errorMessages={["Paste Title is required"]} />

               <SelectValidator variant="outlined" 
               label="Paste Expiry"
               name="expiry"
               size="small"
               className="new-paste-form-input"
              //  validators={["required"]}
              //  errorMessages={["Paste Expiry is required"]}
                >
                
                 <MenuItem value={1}>1 day</MenuItem>
                 <MenuItem value={7} selected >1 week</MenuItem>
                 <MenuItem value={14} >2 week</MenuItem>
                 <MenuItem value={30} >1 month</MenuItem>
                 <MenuItem value={180} >6 month</MenuItem>
                 <MenuItem value={365} >1 year</MenuItem>
    
                 </SelectValidator>

               <SelectValidator variant="outlined" 
               label="Paste Privacy"
               name="privacy"
               size="small"
               className="new-paste-form-input"
              //  validators={["required"]}
              //  errorMessages={["Paste Privacy is required"]}
                >
                 <MenuItem value="public" selected>public</MenuItem>
                 <MenuItem value="private" >private</MenuItem>
                 
                 </SelectValidator>

                <TextValidator variant="outlined" 
               label="Paste Password"
               name="password"
               type="password"
               size="small"
               className="new-paste-form-input"
               validators={["required"]}
               errorMessages={["password is required"]} />

               <SelectValidator variant="outlined" 
               label="Max Views"
               name="maxviews"
               type="number"
               size="small"
               className="new-paste-form-input"
              //  validators={["required"]}
              //  errorMessages={["Max Views is required"]} 
              >

                 <MenuItem value="never" selected>never</MenuItem>
                 <MenuItem value={10}  >Burn after 10 views</MenuItem>
                 <MenuItem value={100} >Burn after 100 views</MenuItem>
                 <MenuItem value={1000} >Burn after 1K views</MenuItem>
                 <MenuItem value={10000} >Burn after 10K views</MenuItem>
                 <MenuItem value={100000} >Burn after 100K views</MenuItem>
                 <MenuItem value={1000000} >Burn after 1M views</MenuItem>
                 <MenuItem value={10000000} >Burn after 10M views</MenuItem>
    
                 </SelectValidator>

               <TextValidator variant="outlined" 
               label="Paste Category"
               name="category"
               type="text"
               size="small"
               className="new-paste-form-input"
               validators={["required"]}
               errorMessages={["Paste Category is required"]} />

               <Button fullWidth className="new-paste-form-button" type="submit" >Create New Paste</Button>
               
            </ValidatorForm>
             
            <div className="new-paste-line"></div>
            </div>     


           <div className="new-paste-image">
             
             <img className="new-paste-image-icon" src={LaptopIcon} alt="" />

             <p> 
                 <span>Info: to check for complete details about paste and its analysis</span>
                  <a href="/"> click here</a> </p>

                  <div className="new-paste-up-icon">
         <Icon icon={arrowUpCircleFill} color="#105A80" className="login-data-arrow-icon" 
         onClick={e => window.scrollTo({top: 0,}) } />
         </div> 
           </div>
          </div>
        
        <Footer />
        </div>
    )
}

export default NewPaste
