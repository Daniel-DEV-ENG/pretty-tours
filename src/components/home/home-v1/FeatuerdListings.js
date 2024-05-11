"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
const FeaturedListings = ({Data}) => {
  console.log("🚀 ~ FeaturedListings ~ Data:", Data?.tour1)



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div>
            <div style={{ position: 'relative',bottom:"50px" }}>
            <ul className='dots' ><span className='dotss'>{dots}</span> </ul>
            
                        </div>
      </div>
    )
  };

  return (
    <>
    <div className='Our-Trending-container '>
    <div className='row  Our-Trending-row'>

  
          <div className="col-lg-4 col-md-6 col-xs-12" data-aos="fade-up" data-aos-delay="200">
    <Card  style={{ overflow:"hidden",borderRadius:"8px 8px 30px 8px",position:"relative",maxWidth:"370px" ,top:'4%'}}>
  



{Data?.tour1?.image_links?.length === 1 ? (
          <Card.Img style={{  height: "356px", borderRadius: "0px 0px 40px 0px" }} src={process.env.NEXT_PUBLIC_IMAGES + Data?.tour1?.image_links?.[0]} alt="0" />
        ) : (
          <Slider {...settings}>
            {Data?.tour1?.image_links?.map((image,i) => (
              <div key={i}>
                <Card.Img style={{  height: "356px", borderRadius: "0px 0px 40px 0px" }} src={process.env.NEXT_PUBLIC_IMAGES + image} alt={i} />
              </div>
            ))}
          </Slider>
        )}


      <div style={{position:"absolute",left:"85%",top:"30px",color:"#fff"}} >
      <i style={{opacity:"0.8"}} class="fa-light fa-heart fa-xl pointer"></i>
       </div>
      <div className='priceCard' style={{position:"absolute",height:"40px",width:"60px",left:"30px",top:"30px"}} >
     <span className='font-content' style={{color:"#181d24",padding:"5px",fontSize:"14px"}}>{Data?.tour1?.price} $</span>
       </div>
      <Card.Body>
        <div style={{display:"flex",alignItems:"center",gap:"14px"}}>

        <span className='font-content' style={{fontWeight:"700",fontSize:"15px"}}>{Data?.tour1?.city} </span>
        <i  class="fa-solid fa-circle" style={{fontSize:"8px",color:"#5b656f"}}></i>
        <span className='font-content' style={{fontWeight:"400",fontSize:"15px",}}>{Data?.tour1?.environment}</span>
        </div>
        <Card.Title className='font-title mt-2' style={{fontSize:"36px",fontWeight:"700"}}>{Data?.tour1?.title}</Card.Title>
 

      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>

      <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
      <i class="fa-light fa-user-group" style={{color:"#918675"}}></i>
      <span className='font-content' style={{fontWeight:"500",fontSize:"16px",color:"#181D24"}}>{Data?.tour1?.guests_count} </span>
      <span className='font-content' style={{fontWeight:"700",fontSize:"16px",color:"#181D24"}}> guests</span>
      </div>

      <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
      <img src='/images/calendar.svg' width={24} height={24}  alt='calendar'/>
      <span className='font-content' style={{fontWeight:"500",fontSize:"16px",color:"#181D24"}}> {moment(Data?.tour1?.first_day).format('D MMMM YYYY')}</span>
    
      </div>



      </div>


        {/* <i class="fa-solid fa-heart-circle-check fa-beat" style={{color: "#d91212"}}></i> */}
        
      </Card.Body>
    </Card>
    </div>



          <div className="col-lg-4 col-md-6 col-xs-12" data-aos="fade-up" data-aos-delay="200">
    <Card  style={{ overflow:"hidden",borderRadius:"8px 8px 30px 8px",position:"relative",maxWidth:"370px" ,top:'4%'}}>
  



{Data?.tour2?.image_links?.length === 1 ? (
          <Card.Img style={{  height: "356px", borderRadius: "0px 0px 40px 0px" }} src={process.env.NEXT_PUBLIC_IMAGES + Data?.tour1?.image_links?.[0]} alt="0" />
        ) : (
          <Slider {...settings}>
            {Data?.tour2?.image_links?.map((image,i) => (
              <div key={i}>
                <Card.Img style={{  height: "356px", borderRadius: "0px 0px 40px 0px" }} src={process.env.NEXT_PUBLIC_IMAGES + image} alt={i} />
              </div>
            ))}
          </Slider>
        )}


      <div style={{position:"absolute",left:"85%",top:"30px",color:"#fff"}} >
      <i style={{opacity:"0.8"}} class="fa-light fa-heart fa-xl pointer"></i>
       </div>
      <div className='priceCard' style={{position:"absolute",height:"40px",width:"60px",left:"30px",top:"30px"}} >
     <span className='font-content' style={{color:"#181d24",padding:"5px",fontSize:"14px"}}>{Data?.tour2?.price} $</span>
       </div>
      <Card.Body>
        <div style={{display:"flex",alignItems:"center",gap:"14px"}}>

        <span className='font-content' style={{fontWeight:"700",fontSize:"15px"}}>{Data?.tour2?.city} </span>
        <i  class="fa-solid fa-circle" style={{fontSize:"8px",color:"#5b656f"}}></i>
        <span className='font-content' style={{fontWeight:"400",fontSize:"15px",}}>{Data?.tour2?.environment}</span>
        </div>
        <Card.Title className='font-title mt-2' style={{fontSize:"36px",fontWeight:"700"}}>{Data?.tour2?.title}</Card.Title>
 

      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>

      <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
      <i class="fa-light fa-user-group" style={{color:"#918675"}}></i>
      <span className='font-content' style={{fontWeight:"500",fontSize:"16px",color:"#181D24"}}>{Data?.tour2?.guests_count} </span>
      <span className='font-content' style={{fontWeight:"700",fontSize:"16px",color:"#181D24"}}> guests</span>
      </div>

      <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
      <img src='/images/calendar.svg' width={24} height={24}  alt='calendar'/>
      <span className='font-content' style={{fontWeight:"500",fontSize:"16px",color:"#181D24"}}> {moment(Data?.tour2?.first_day).format('D MMMM YYYY')}</span>
    
      </div>



      </div>


        {/* <i class="fa-solid fa-heart-circle-check fa-beat" style={{color: "#d91212"}}></i> */}
        
      </Card.Body>
    </Card>
    </div>
          <div className="col-lg-4 col-md-6 col-xs-12" data-aos="fade-up" data-aos-delay="200">
    <Card  style={{ overflow:"hidden",borderRadius:"8px 8px 30px 8px",position:"relative",maxWidth:"370px" ,top:'4%'}}>
  



{Data?.tour3?.image_links?.length === 1 ? (
          <Card.Img style={{  height: "356px", borderRadius: "0px 0px 40px 0px" }} src={process.env.NEXT_PUBLIC_IMAGES + Data?.tour1?.image_links?.[0]} alt="0" />
        ) : (
          <Slider {...settings}>
            {Data?.tour3?.image_links?.map((image,i) => (
              <div key={i}>
                <Card.Img style={{  height: "356px", borderRadius: "0px 0px 40px 0px" }} src={process.env.NEXT_PUBLIC_IMAGES + image} alt={i} />
              </div>
            ))}
          </Slider>
        )}


      <div style={{position:"absolute",left:"85%",top:"30px",color:"#fff"}} >
      <i style={{opacity:"0.8"}} class="fa-light fa-heart fa-xl pointer"></i>
       </div>
      <div className='priceCard' style={{position:"absolute",height:"40px",width:"60px",left:"30px",top:"30px"}} >
     <span className='font-content' style={{color:"#181d24",padding:"5px",fontSize:"14px"}}>{Data?.tour3?.price} $</span>
       </div>
      <Card.Body>
        <div style={{display:"flex",alignItems:"center",gap:"14px"}}>

        <span className='font-content' style={{fontWeight:"700",fontSize:"15px"}}>{Data?.tour3?.city} </span>
        <i  class="fa-solid fa-circle" style={{fontSize:"8px",color:"#5b656f"}}></i>
        <span className='font-content' style={{fontWeight:"400",fontSize:"15px",}}>{Data?.tour3?.environment}</span>
        </div>
        <Card.Title className='font-title mt-2' style={{fontSize:"36px",fontWeight:"700"}}>{Data?.tour3?.title}</Card.Title>
 

      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>

      <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
      <i class="fa-light fa-user-group" style={{color:"#918675"}}></i>
      <span className='font-content' style={{fontWeight:"500",fontSize:"16px",color:"#181D24"}}>{Data?.tour3?.guests_count} </span>
      <span className='font-content' style={{fontWeight:"700",fontSize:"16px",color:"#181D24"}}> guests</span>
      </div>

      <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
      <img src='/images/calendar.svg' width={24} height={24}  alt='calendar'/>
      <span className='font-content' style={{fontWeight:"500",fontSize:"16px",color:"#181D24"}}> {moment(Data?.tour3?.first_day).format('D MMMM YYYY')}</span>
    
      </div>



      </div>


        {/* <i class="fa-solid fa-heart-circle-check fa-beat" style={{color: "#d91212"}}></i> */}
        
      </Card.Body>
    </Card>
    </div>


    
 
    </div>
    </div>

  </>
  );
};

export default FeaturedListings;
