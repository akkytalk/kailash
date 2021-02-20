import React from 'react'
import Header from '../Header/Header'
import MemberForm from './MemberForm'
import Footer from "../Footer/Footer"

import "./Login.scss"
import Description from "./Description/Description";
import LoginImage from "../../svgfiles/login.svg";
import  LaptopIcon  from "../../svgfiles/finance.svg"
import LoginIcon from './LoginIcon'



function Login() {
    return (
        <div className="login">
            <Header />

            <div className="login-form">
            <img src={LaptopIcon} alt="" className="login-form-image1" />
            <MemberForm />
             <img src={LoginImage} alt="" className="login-form-image2" />
            </div>

            <div className="login-line"></div>

            <div className="login-data">

            <Description />
            <LoginIcon />

            </div>
            <Footer loginFooter />
        </div>
    )
}

export default Login
