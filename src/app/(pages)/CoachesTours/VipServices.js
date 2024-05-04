"use client"
import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VipServices = ({title,subtitle,Data})=> {
    return(

        
      <section  className="our-services mb-5">
      <div className="container text-center ">
        <div
          className="row"
          data-aos="fade-up"
          data-aos-delay="100"
          >
            <div className='col-lg-12'>

          <h3 className="Title-Section">VIP service for british airports</h3>
          <p className="SubTittle-Section">Fusce blandit magna eget felis dapibus, ac lacinia quam faucibus. Quisque feugiat felis a quam volutpat, non scelerisque nibh scelerisque.</p>
            </div>
        </div>
</div>

<div className=" container-image-our-services">
  <Slider
    dots={true} 
    infinite={true} 
    speed={500} 
    slidesToShow={3} 
    slidesToScroll={3} 
    responsive={[ 
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]}
  >
{Data?.map((coach,i)=>( 
<>
    <div className="p-2" key={i}>
      <div className="imageContainer">
        <img
          priority
          src="/images/OUR SERVICES3.png"
          className="image "
          alt="blog"
        />
        <div className="overlay">
          <h3 className="title-card">{coach?.title}</h3>
        </div>
      </div>
    </div>


      </>
))}

  </Slider>


</div>





    </section>

    )

}

export default VipServices;