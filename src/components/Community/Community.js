import { Button } from '@material-ui/core'
import React from 'react'
import { Icon } from '@iconify/react';
import bxDollar from '@iconify-icons/bx/bx-dollar';
import speedometerOutline from '@iconify-icons/ion/speedometer-outline';
import balanceScale from '@iconify-icons/emojione-monotone/balance-scale';
import arrowUpCircleFill from '@iconify-icons/bi/arrow-up-circle-fill';
import crownIcon from '@iconify-icons/tabler/crown';

import  LaptopIcon  from "../../svgfiles/finance.svg"


import "./Community.scss"

function Community({ linkPage }) {
    return (
        <div className={linkPage ? "link-page-community" : "community"}>
            
            <div className="community-data">

             <div className="community-data-items">

             <div className="community-data-items-circle">
             <Icon icon={bxDollar} color="#ECF0F3" className="circle-icons" />
              </div>

             <div className="community-data-items-text">
                 <h4>Monitization</h4>
                 <p> Turn your passion into profit.
                     Pasterock is a free, simple way to earn money by making paste, 
                     url shortner and by sharing media files.</p>
                 </div>           

             </div>
                  
               <div className="community-data-items">

             <div className="community-data-items-circle">
             <Icon icon={speedometerOutline} color="#ECF0F3" className="circle-icons" />
              </div>

             <div className="community-data-items-text">
                 <h4>Super Dashboard</h4>
                 <p> Super Dashboard helps you Analyse and strategize Paste Settings, Ads, Profile Settings, Coupons, Payment options and more.
                 </p>
                 </div>           

             </div>


             <div className="community-data-items">

             <div className="community-data-items-circle" >
             <Icon icon={balanceScale} color="#ECF0F3" className="circle-icons" />
              </div>

             <div className="community-data-items-text">
                 <h4>Super and fair checkout rates</h4>
                 <p> We want our service to be fair and easy for user to paste content but at the same time profitable for member. </p>
                 </div>           

             </div>

             
             <div className="community-data-items">

             <div className="community-data-items-circle">
             <Icon icon={crownIcon} color="#ECF0F3" className="circle-icons" />
              </div>

             <div className="community-data-items-text">
                 <h4>Lowest Possible checkouts</h4>
                 <p> Depending upon demographics, you may get lowest possible checkouts as low as $3 (available in india, indonesia and 3 more).</p>
                 </div>           

             </div>
               
            </div>
 
            <div className="community-image">
              <img  src={LaptopIcon} alt="laptop_image" />
              
              <Button variant="outlined" className="community-image-button">Join our awesome community</Button>

              <div className="community-up-icon">
         <Icon icon={arrowUpCircleFill} color="#105A80" className="login-data-arrow-icon" 
         onClick={e => window.scrollTo({top: 0,}) } />
         </div> 
            </div>

        </div>
    ) 
}

export default Community
