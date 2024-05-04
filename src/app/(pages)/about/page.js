"use client"
import AboutUsHero from "@/components/pages/about/HeroAboutUs";
import Link from "next/link";
import AboutApi from "./api/AboutApi";
import AboutUs from "./AboutUs";
import Header from "@/components/home/home-v1/Header";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/home-v3/footer";
import '../../../style/global.css'
// export const metadata = {
//   title: "About  || Homez - Real Estate NextJS Template",
// };

const About = () => {

const Data = AboutApi()

  return (
    <>
     <div className="wrapper ovh" >
          <Header />


          <div className="MobileMenu ">

            <MobileMenu />
          </div>

        </div>
       <section className="home-services-style1 ">
        <div className="home-style1">
          <div className="container about-container ">
            <div className="row" data-aos="fade-up" data-aos-delay="200">
              
                <AboutUsHero  Data={Data} />
            
            </div>
          </div>
          </div>
          </section>
          <div>

          <AboutUs Data={Data}/>
          </div>
          <Footer />
    
    </>
  );
};

export default About;
