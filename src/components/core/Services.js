import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Services = ({Data})=> {
  return(

        
      <section  className="our-services">
      <div className="container text-center pt-3 ">
        <div
          className="row "
          data-aos="fade-up"
          data-aos-delay="100"
          >
          <h3 className="Title-Section" data-aos="fade-up" data-aos-delay="200">OUR SERVICES</h3>
          <p className="SubTittle-Section" data-aos="fade-down" data-aos-delay="200">{Data?.services_body} </p>
        </div>
          </div>
        <div className="row container-image-our-services" data-aos="fade-up" data-aos-delay="200">
<div className="col-lg-4 col-md-12 col-xs-12 ">
<Link href="/ToursUk" passHref>
  <div className='imageContainer'>
      <img
        priority
        src={process.env.NEXT_PUBLIC_IMAGES + Data?.services_image_1 }

        className='image'
        alt="blog"
      />
      <div className='overlay'>
      </div>
    </div>
   <p className="content-image">UK Tours</p> 
   </Link>
</div>
<div className="col-lg-4 col-md-12 col-xs-12">
  <Link href="/services/vip" passHref>
  <div className='imageContainer'>
  <img
    priority
    src={process.env.NEXT_PUBLIC_IMAGES + Data?.services_image_2 }
    alt="blog"
className='image-services-center'
  />
        <div className='overlay-center'>
      </div>
  </div>
       <p className="content-image">VIP Service</p> 
    
       </Link>
</div>
<div className="col-lg-4 col-md-12 col-xs-12">
<Link href="CoachesTours" passHref>
<div className='imageContainer text-center'>
      <img
        priority
        src={process.env.NEXT_PUBLIC_IMAGES + Data?.services_image_3 }
        className='image'
        alt="blog"
      />
      <div className='overlay'>
      
      </div>
      <h6 className="content-image" >Our Transportation</h6> 
    </div>
   
  
</Link>
</div>


</div>




    </section>

    )

}

export default Services;