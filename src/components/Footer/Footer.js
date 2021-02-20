
import React from 'react'

import "./Footer.scss"

function Footer({ loginFooter, linkPage }) {
    return (
        <div className={loginFooter? "login-footer" : linkPage? "link-page-footer" : "footer"}>  
            <div className="footer-container">

             <h2>PasteRock.io</h2>
             
             <p>PasteRock.io is a completely free tool where you can create paste, which apart from being free, you get paid! So, now you can make money from home, when managing and protecting your links.</p>

             <p>Design & Logo © PasteRock.io</p>

            </div>
 
            <div className="footer-items">
               
                <div className="footer-helpful-links">
                 <h4>Helpful Links</h4>

                 <ul>
                     <li><a href="/">Home</a></li>
                     <li><a href="/">Payout rates</a></li>
                     <li><a href="/">Terms & conditions</a></li>
                     <li><a href="/">Privacy Policy</a></li>
                     <li><a href="/">DMCA</a></li>
                 </ul>
            
                </div>

                <div className="footer-contact-us">

                    <h4>Contact Us</h4>
                      
                      <p>Mumbai, 400072</p>
                      <p>INDIA</p>
                      <p>Phone: +91 00000 00000</p>
                      <p>Email: info@pasterock.io</p>

                    </div> 

            </div>  
        </div>
    )
}

export default Footer
