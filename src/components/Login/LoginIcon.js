import React from 'react';

import  LaptopIcon  from "../../svgfiles/finance.svg"

import { Icon } from '@iconify/react';
import arrowUpCircleFill from '@iconify-icons/bi/arrow-up-circle-fill';

function LoginIcon() {
    return (
        <div className="login-data-image">
            
        <img src={LaptopIcon} alt="" />
         
         <div className="login-data-icon">
         <Icon icon={arrowUpCircleFill} color="#105A80" className="login-data-arrow-icon" 
         onClick={e => window.scrollTo({top: 0,}) } />
         </div> 
        </div>
    )
}

export default LoginIcon
