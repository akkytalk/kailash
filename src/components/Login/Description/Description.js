import React from 'react'

import "./Description.scss"
import { Icon } from '@iconify/react';
import bxDollar from '@iconify-icons/bx/bx-dollar';
import speedometerOutline from '@iconify-icons/ion/speedometer-outline';
import balanceScale from '@iconify-icons/emojione-monotone/balance-scale';
import crownIcon from '@iconify-icons/tabler/crown';

function Description() {
    return (
        <div className="description">

             <div className="description-items">

             <div className="description-items-circle">
             <Icon icon={bxDollar} color="#ECF0F3" className="circle-icons" />
              </div>

             <div className="description-items-text">
                 <h4>Monitization</h4>
                 <p> Turn your passion into profit.
                     Pasterock is a free, simple way to earn money by making paste, 
                     url shortner and by sharing media files.</p>
                 </div>           

             </div>
                  
               <div className="description-items">

             <div className="description-items-circle">
             <Icon icon={speedometerOutline} color="#ECF0F3" className="circle-icons" />
              </div>

             <div className="description-items-text">
                 <h4>Super Dashboard</h4>
                 <p> Super Dashboard helps you Analyse and strategize Paste Settings, Ads, Profile Settings, Coupons, Payment options and more.
                 </p>
                 </div>           

             </div>


             <div className="description-items">

             <div className="description-items-circle" >
             <Icon icon={balanceScale} color="#ECF0F3" className="circle-icons" />
              </div>

             <div className="description-items-text">
                 <h4>Super and fair checkout rates</h4>
                 <p> We want our service to be fair and easy for user to paste content but at the same time profitable for member. </p>
                 </div>           

             </div>

             
             <div className="description-items">

             <div className="description-items-circle">
             <Icon icon={crownIcon} color="#ECF0F3" className="circle-icons" />
              </div>

             <div className="description-items-text">
                 <h4>Lowest Possible checkouts</h4>
                 <p> Depending upon demographics, you may get lowest possible checkouts as low as $3 (available in india, indonesia and 3 more).</p>
                 </div>           

             </div>
               
            </div>
 
    )
}

export default Description
