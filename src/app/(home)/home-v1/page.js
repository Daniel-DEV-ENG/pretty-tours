/* eslint-disable @next/next/no-img-element */
"use client"

import Hero from "@/components/home/home-v1/hero";
import Services from "@/components/core/Services";
import AboutUs from "@/components/core/AboutUs";
import WorkWithUs from "@/components/core/WorkWithUs";
import OurClients from "@/components/core/OurClients";
import Specialities from "@/components/core/Specialities";
import Trending from "@/components/core/Trending";
import HomeAPI from "./api/HomeApi";
import Header from "@/components/home/home-v1/Header";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/home-v3/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// export const metadata = {
//   title: "Home v1 || Homez - Real Estate NextJS Template",
// };

const Home_V1 = () => {

  const Data = HomeAPI();
  console.log("🚀 ~ Data:", Data)

  return (
    <>
     <div className="wrapper ovh">
          <Header />


          <div className="MobileMenu ">

            <MobileMenu />
          </div>

        </div>
      <section className="Slider p0 ">
      <Slider
  dots={true} 
  infinite={false} 
  speed={500} 
  slidesToShow={1} 
  slidesToScroll={1}
  appendDots={dots => (
    <div>
      <div style={{ position: 'relative',bottom:"50px" }}>
        <ul className='dots' ><span className='dotss'>{dots}</span> </ul>
      </div>
    </div>
  )}
  responsive={[ 
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
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
  {Data?.hero_image_links?.map((val,i)=>(<>
  
  <div key={i}>
    <div className="imageContainer">
      <img
        src={process.env.NEXT_PUBLIC_IMAGES  + val}
        className=" w-100   "
        alt="blog"
        style={{borderRadius:"0px 0px 80px 0px"}}
      />
    </div>
  </div>

 
  </>))}
</Slider>

      <div className="Hero" >

                <Hero Data={Data} />
            
      </div>
          
      </section>
 <Trending Data={Data}/>
      <Services Data={Data}/>
<Specialities  Data={Data}/>
  <WorkWithUs Data={Data}/>  
     <AboutUs Data={Data}/>
    <OurClients Data={Data}/>

    <Footer />

    </>
  );
};

export default Home_V1;
