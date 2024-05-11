import React, { useState } from 'react';
import Image from "next/image";
import Carousel from 'react-bootstrap/Carousel';

const OurClients = ({Data})=> {




    return(

       

        <div className="img-Our-Clients" >
              
           
                  
             
    <div className='client-position'>
    <h2 className="Client-Section" > {Data?.testimonials_title}</h2>
        
    </div>
          <div className="container" style={{height:700}}  >
         <div>
              <div id="carouselExampleDark" class="position carousel carousel-dark slide" data-bs-ride="carousel" >
             
              <div className="carousel-indicators">
  {Array.from({ length: Data?.testimonials?.length }, (_, index) => (
    <button
      key={index}
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={index}
      className={`mt-5 ${index === 0 ? 'active' : ''}`}
      aria-label={`Slide ${index + 1}`}
    ></button>
  ))}
</div>
                  <div class="carousel-inner vh-100">
                  <div class="carousel-indicatorss">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="13,12,11,10,9,8,7,6,5,4,3,2,1,0"
          class="  arrow-left" aria-current="true" aria-label="Slide 1">
          <i className="fas fa-arrow-left  "></i> 
      </button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1,2,3,4,5,6,7,8,9,10,11,12,13"
          aria-label="Slide 2" class="arrow-right">
          <i class="fas fa-arrow-right"></i> 
      </button>
  </div>
                    {Data?.testimonials?.map((val,i)=>(
                        <>
                      <div key={val?.id} className={`carousel-item ${i === 0 ? 'active' : ''}`} data-bs-interval="10000">
                          <div class="client-item   text-center">
                              <div className="">
                                <img  src={process.env.NEXT_PUBLIC_IMAGES + val?.image} className=" rounded-circle shadow-lg img-testimonials mb-3"
                                      alt=""/>
                                      </div>
                                      <div class="d-flex flex-column align-items-center justify-content-start  h-100 p-1">
                                        
                              <p class="font-content mx-auto">{val?.content}</p>
                              <h3 className="font-content mt-5"> {val?.testifier}</h3>
                                      </div>
                          </div>
                      </div>
                      </>

                    ))}
              
                      </div>
                   
                 
                  </div>
  
              </div>
          </div>
      </div>
    
  


    )

}

export default OurClients;