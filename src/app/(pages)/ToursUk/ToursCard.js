"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ToursApi from './api/ToursApi';
import Link from 'next/link';
const ToursCard = ({Data}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
  autoplaySpeed: 4000, 
    appendDots: dots => (
      <div>
            <div style={{ position: 'relative',bottom:"50px" }}>
            <ul className='dots' ><span className='dotss'>{dots}</span> </ul>
            
                        </div>
      </div>
    )
  };

  return (
    <div className='Tours-container container'>

    <div className='row '>

      {console.log(Data)}
    {Data?.map((item,index)=> (
<>

<div  className="col-lg-4 col-md-6 col-xs-12 mt-5" data-aos="fade-up" data-aos-delay="200">
<Link href={`/detalis/${item?.id}`}  style={{textDecoration:"none"}}>
    <Card  className='Our-Trending-card' style={{ overflow:"hidden",borderRadius:"8px 8px 30px 8px",position:"relative",maxWidth:"370px",height:"auto",top:'4%'   }}>
    {item?.image_links?.length === 1 ? (
          <Card.Img style={{ height: "300px", borderRadius: "0px 0px 40px 0px" }} src={process.env.NEXT_PUBLIC_IMAGES + item?.image_links[0]} alt="0" />
        ) : (
          <Slider {...settings}>
            {item?.image_links?.map((image,i) => (
              <div key={i}>
                <Card.Img style={{ height: "300px", borderRadius: "0px 0px 40px 0px" }} src={process.env.NEXT_PUBLIC_IMAGES + image} alt={i} />
              </div>
            ))}
          </Slider>
        )}
      <div style={{position:"absolute",left:"85%",top:"30px",color:"#fff"}} >
      <i style={{opacity:"0.8"}} class="fa-light fa-heart fa-xl pointer"></i>
       </div>
      <div className='priceCard' style={{position:"absolute",height:"40px",width:"67px",left:"30px",top:"30px",}} >
     <span className='font-content' style={{color:"#181d24",margin:"4px"}}>{item?.price}$</span>
       </div>
      <Card.Body>
        <div style={{display:"flex",alignItems:"center",gap:"14px"}}>

        <span className='font-content' style={{fontWeight:"700",fontSize:"15px",color:"#181D24"}}> {item?.city}</span>
        <i  class="fa-solid fa-circle" style={{fontSize:"8px",color:"#5b656f"}}></i>
        <span className='font-content' style={{fontWeight:"400",fontSize:"15px",color:"#181D24"}}>{item?.environment}</span>
        </div>
        <Card.Title className='font-title mt-2' style={{fontSize:"24px",fontWeight:"700"}}>{item?.title}</Card.Title>
 

      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>

      <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
      <i class="fa-light fa-user-group" style={{color:"#918675"}}></i>
      <span className='font-content' style={{fontWeight:"500",fontSize:"16px",color:"#181D24"}}>{item?.guests_count} </span>
      <span className='font-content' style={{fontWeight:"700",fontSize:"16px",color:"#181D24"}}> guests</span>
      </div>

      <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
      <img src='/images/calendar.svg'  alt=''/>
      <span className='font-content' style={{fontWeight:"500",fontSize:"16px",color:"#181D24"}}>{item?.first_day.slice(0,9)}</span>
    
      </div>



      </div>


        
      </Card.Body>
    </Card>
</Link>
    </div>

</>
    ))}
     
  

   

   
   
   

    
    </div>

  </div>
  );
};

export default ToursCard;
