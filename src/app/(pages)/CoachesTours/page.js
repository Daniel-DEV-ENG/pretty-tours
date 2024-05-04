"use client"



import HeroServices from "@/components/pages/services/hero";
import VipServices from "./VipServices";
import CoachesApi from "./api/CoachesApi";
import Header from "@/components/home/home-v1/Header";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/home-v3/footer";

// export const metadata = {
//   title: "Pricing  || Homez - Real Estate NextJS Template",
// };

const CoachesTour = () => {

  const Data = CoachesApi()

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
              
                <HeroServices title='Coaches Tours' subtitle='.Experience a VIP welcome at Heathrow Airport with our Very Important Traveler service.' content='Elevate your airport experience with our VIP services, From arrival to departure, we provide premium assistance and comfort at British airports,us' />
            
            </div>
          </div>
          </div>
          </section>
          <VipServices Data={Data}/>
          
          <Footer />

    </>
  );
};

export default CoachesTour;
 