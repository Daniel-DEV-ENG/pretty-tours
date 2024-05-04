import React from 'react';

export default function AboutUsHero ({Data}){

    return(
        <div className="  ">
        
        <div className='row'>
      
<div className='col-md-6 col-xs-12'>
    <div style={{ maxWidth: '480px', height: '280px'  }} className='border-contactus'>
    <img
    priority
    src="/images/OUR SERVICES.png"
    alt="blog"
    className='border-contactus'
  />
    </div>

</div>
<div className='col-md-6 col-xs-12 mb-5 ' >
<h3 className='Title-Section' data-aos="fade-up" data-aos-delay="200">
{Data?.title_1}
</h3>
<p data-aos="fade-up" data-aos-delay="200">
{Data?.paragraph_1}
</p>
</div>  
        </div>
        </div>

    )

}