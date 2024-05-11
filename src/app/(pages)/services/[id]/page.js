"use client"


import HeroServices from "@/components/pages/services/hero";
import VipServices from "@/components/pages/services/vip";
import ServicesApi from "../api/ServicesApi";
import Header from "@/components/home/home-v1/Header";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/home-v3/footer";
import BookTourVip from "../../CoachesTours/BookTour/page";

// export const metadata = {
//   title: "Pricing  || Homez - Real Estate NextJS Template",
// };

const PricingPlan = () => {


const Data = ServicesApi()

  return (
    <>
     <div className="wrapper ovh">
          <Header />


          <div className="MobileMenu ">

            <MobileMenu />
          </div>

        </div>
    <section className="home-services-style1 p0">
        <div className="home-style1">
          <div className="container">
            <div className="row" data-aos="fade-up" data-aos-delay="200">
              
                <HeroServices title='VIP Service' subtitle='.Experience a VIP welcome at Heathrow Airport with our Very Important Traveler service.'  />
              
            </div>
          </div>
          </div>
          </section>
          <VipServices Data={Data?.data}/>
          <BookTourVip Data={Data?.data}/>
          <Footer />

    </>
  );
};

export default PricingPlan;
 