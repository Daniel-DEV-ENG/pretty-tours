import React from 'react';

export default function CardService ({Data}){

    return(

        <div className='card-service '>
            <div className='row '>
<div className='col-md-6 col-xs-12' data-aos="fade-up" data-aos-delay="200">
    
    <img src="/images/manand.png" 
  
   className='card-image'
alt="man"/>
    

</div>
<div className='col-md-6 col-xs-12' data-aos="fade-down" data-aos-delay="200">
    <div className='card-service-container'>
        <div className='card-service-content '>
            <h5 className='font-content'>
        Elevate your airport experience with our VIP services, From arrival to departure, we provide premium assistance and comfort at British airports,us 
            {Data?.box_title}
            </h5>

        </div>

    </div>
</div>

            </div>

            </div>

    )

}