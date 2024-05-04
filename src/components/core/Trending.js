import React from 'react';
import FeaturedListings from "@/components/home/home-v1/FeatuerdListings";
export default function Trending ({Data}){

    return(

        <section id="explore-property" className="pb90 pb90-xs pb30-md ">
        <div className="container">

          <div className="w-100 text-center " data-aos="fade-up" data-aos-delay="200">
    <h1 className="Title-Section" style={{marginBottom:"40px"}}>{Data?.tours_title}</h1>
    <p className="SubTittle-Section"> {Data?.tours_body}</p>
          </div>
       
        </div>

        

      <FeaturedListings style={{marginTop:'32px'}} />

      </section>

    )

}