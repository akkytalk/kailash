import { IconButton, OutlinedInput } from '@material-ui/core'
import { CopyIcon } from "../../svgfiles/svgIcon"
import React from 'react'

//import ReactSwipeButton from 'react-swipe-button'
import "./PasteMobile.scss"
// import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
// import { useHistory } from 'react-router-dom'

function PasteMobile() {

  // const history = useHistory();
  //   const handleFormSubmit = () => {

  //   }
  
  //   const  onSuccess = () => {
  //        history.push("/login")
  //   }

    return (
        <div className="paste-mobile">
            <div className="paste-mobile-add">

            </div>

            <div className="paste-mobile-icons">
              <span className="paste-mobile-size">0.00KB</span> 
              <div className="paste-mobile-copy">
              <span className="paste-mobile-copy-span">https://pasterock.io/tag</span>
              <IconButton className="paste-mobile-icon-button">

              <CopyIcon className="paste-mobile-copy-icon" />
              </IconButton>
              </div>
              </div>

              <div className="paste-mobile-title">
              <input type="text" className="paste-mobile-title-disabled" placeholder="Your Title" disabled />
             <OutlinedInput multiline rows={ 15} className="paste-mobile-box-input" fullWidth />

              </div>
              
              {/* <div className="paste-mobile-form">
             <ValidatorForm className="paste-mobile-val-form" onSubmit={handleFormSubmit}>

              
               <TextValidator variant="outlined" 
               label="Paste Title"
               name="title"
               size="small"
               className="paste-mobile-form-input"
               validators={["required"]}
               errorMessages={["Paste Title is required"]} />
              
            
               <TextValidator variant="outlined" 
               label="Paste Privacy"
               name="privacy"
               size="small"
               className="paste-mobile-form-input"
               validators={["required"]}
               errorMessages={["Paste Privacy is required"]} />
            
              
               <TextValidator variant="outlined" 
               label="Paste Expiry"
               name="expiry"
               size="small"
               className="paste-mobile-form-input"
               validators={["required"]}
               errorMessages={["Paste Expiry is required"]} />

              
               
               
               <TextValidator variant="outlined" 
               label="Paste Password"
               name="password"
               type="password"
               size="small"
               className="paste-mobile-form-input"
               validators={["required"]}
               errorMessages={["password is required"]} />
               
               

                <div className="paste-mobile-form-button">
               <ReactSwipeButton 
                    text='Swipe right to create new paste'
                    color='#105A80'
                    onSuccess={onSuccess}
                  />
                  </div>
              
                
             </ValidatorForm>

         </div> */}
         {/* <div className="paste-mobile-line"></div> */}
            
        </div>
    )
}

export default PasteMobile
