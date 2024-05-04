"use client";

import React from 'react'
import "photoswipe/dist/photoswipe.css";
import '../detalis.css'
import DetalisHeader from '../DetalisHeader/page';
import Destiations from '../Destiations/page';
import Location from '../Location/page'
import BookTour from '../BookTour/page';
import { useParams } from 'next/navigation';
import DetalisApi from '../api/DetalisApi';
import Header from "@/components/home/home-v1/Header";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/home-v3/footer";

export default function Detalis() {

const {id} = useParams()
const Data = DetalisApi(id)

  return (
        <>
 <div className="wrapper ovh">
          <Header />


          <div className="MobileMenu ">

            <MobileMenu />
          </div>

        </div>

        {/* section DetalisHeader */}
      <div>
      <DetalisHeader Data={Data}/>
      </div>

        {/* End section DetalisHeader */}
        <div className='container '>

        
        {/* section Destiations */}
        <div style={{marginTop:"80px"}}>
      <Destiations  Data={Data}/>
      </div>

        {/* End section Destiations */}


        
        {/* section Location */}
        <div style={{marginTop:"80px"}}>
      <Location Data={Data}/>
      </div>
        {/* End section Location */}

        {/* section Book This Tour */}
        </div>
        <div style={{marginTop:"80px",}}>
      <BookTour Data={Data}/>

      </div>
        {/* End section Book This Tour */}

        <Footer />
    
        </>
  )
}
