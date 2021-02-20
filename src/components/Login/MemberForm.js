import { Button, Card, Checkbox, FormControlLabel } from '@material-ui/core'
import React from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'

import "./Login.scss"

function MemberForm() {
    return (
        <div className="member-form">
            <Card elevation={6} className="member-card">
                <ValidatorForm>
                    <div className="member-form-elements">

                        <h5>Do you have what it takes to become member?</h5>

                        <TextValidator variant="outlined" 
                            label="Name"
                            name="name"
                            size="small"
                            className="member-form-input"
                            validators={["required"]}
                            errorMessages={["Name is required"]} />  

                            <TextValidator variant="outlined" 
                            label="Username"
                            name="username"
                            size="small"
                            className="member-form-input"
                            validators={["required"]}
                            errorMessages={["Username is required"]} />

                            <TextValidator variant="outlined" 
                            label="Password"
                            name="password"
                            type="password"
                            size="small"
                            className="member-form-input"
                            validators={["required"]}
                            errorMessages={["Password is required"]} />

                            <TextValidator variant="outlined" 
                            label="Email Address"
                            name="email"
                            size="small"
                            type="email"
                            className="member-form-input"
                            validators={["required"]}
                            errorMessages={["Email Address is required"]} />

                        

                            <FormControlLabel
                               className="member-form-checkbox"
                               name="agreement"
                                
                                control={
                                <Checkbox
                                 size="small"
                                 className="memeber-form-checkbox"
                                />
                                  }
                               label="Before you complete your registration, you must accept the PasteRock.io Terms and Service."
                               />
  
                              <Button variant="outlined" type="submit" className="member-form-button" >Register</Button>
                               <center >OR</center>   
                               <Button variant="outlined" type="submit" className="member-form-button2" >Already Registered ? Login Now</Button>
                              

                    </div>
                </ValidatorForm>
            </Card>
        </div>
    )
}

export default MemberForm
