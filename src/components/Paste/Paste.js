import {   IconButton, MenuItem, OutlinedInput, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import { SelectValidator, TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import {  useHistory } from 'react-router-dom'
import ReactSwipeButton from 'react-swipe-button'

import { CopyIcon } from "../../svgfiles/svgIcon"
import "./Paste.scss"
import PasteMobile from './PasteMobile'

function Paste() {

  const theme = useTheme();
  const history = useHistory();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  
  const handleFormSubmit = () => {
    
  }

  const  onSuccess = () => {
     
    history.push("/login");
    
  }

    return (
      <section className="paste-section">
        <div className="paste">
        <PasteMobile  />
         
        <div className="paste-container">
         
         
         <div className="paste-box">
           
           <div className="paste-title">
             <div className="paste-title-item">
              
              <input type="text" className="paste-title-disabled" placeholder="Your Title" disabled />
              <span className="paste-size">Size</span>

             </div>

             <div className="paste-copy">
              
              <span className="paste-copy-span">https://pasterock.io/tag</span>
              <IconButton className="paste-icon-button">

              <CopyIcon className="paste-copy-icon" />
              </IconButton>

             </div> 
           </div> 

           <OutlinedInput multiline rows={ isTablet? 15 : 18 } className="paste-box-input" fullWidth />
         </div>

         <div className="paste-form">
             <ValidatorForm className="paste-val-form" onSubmit={handleFormSubmit}>

              <div className="paste-form-title">
               <TextValidator variant="outlined" 
               label="Paste Title"
               name="title"
               size="small"
               className="paste-form-input"
               validators={["required"]}
               errorMessages={["Paste Title is required"]} />
              
            
               <SelectValidator variant="outlined" 
               label="Paste Privacy"
               name="privacy"
               size="small"
               className="paste-form-input"
               validators={["required"]}
               errorMessages={["Paste Privacy is required"]} >

                 <MenuItem value="public" selected>public</MenuItem>
                 <MenuItem value="private" >private</MenuItem>
                 
                 </SelectValidator>              
              </div>
              

              <div className="paste-form-title">
               <SelectValidator variant="outlined" 
               label="Paste Expiry"
               name="expiry"
               size="small"
               className="paste-form-input"
               validators={["required"]}
               errorMessages={["Paste Expiry is required"]} >


                 <MenuItem value={1}>1 day</MenuItem>
                 <MenuItem value={7} selected >1 week</MenuItem>
                 <MenuItem value={14} >2 week</MenuItem>
                 <MenuItem value={30} >1 month</MenuItem>
                 <MenuItem value={180} >6 month</MenuItem>
                 <MenuItem value={365} >1 year</MenuItem>
    
                 </SelectValidator>
              
               
               
               <TextValidator variant="outlined" 
               label="Paste Password"
               name="password"
               type="password"
               size="small"
               className="paste-form-input"
               validators={["required"]}
               errorMessages={["password is required"]} />
               
               </div>

                <div className="paste-form-button">
               <ReactSwipeButton 
                    text='Swipe right to create new paste'
                    color='#105A80'
                    onSuccess={onSuccess}
                  />
                  </div>
                
             </ValidatorForm>

         </div>
        
        </div>
        
          <div className="paste-add">
          
              
          </div>
          
        </div>

        <div className="paste-line"></div>
        
        </section>
    )
}

export default Paste
