"use client"


import ContactApi from "@/components/home/home-v3/footer/api/ContactApi";
import FAQ from "@/components/pages/contact/faqs";
import HeroServices from "@/components/pages/services/hero";
import VipServices from "@/components/pages/services/vip";
import Header from "@/components/home/home-v1/Header";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/home-v3/footer";
// export const metadata = {
//   title: "Contact  || Homez - Real Estate NextJS Template",
// };



const Contact = () => {
  const Data = ContactApi()
  console.log("🚀 ~ Contact ~ Data:", Data)
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
              
                <HeroServices title={Data?.hero_title} subtitle={Data?.hero_body}  Data={Data} />
            
            </div>
          </div>
          </div>
          </section>
          <FAQ/>
          <Footer />

</>
  );
};

export default Contact;
