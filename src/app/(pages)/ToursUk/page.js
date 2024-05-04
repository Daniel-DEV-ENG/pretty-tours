"use client"
import HeroContent from "@/components/home/home-v1/hero/HeroContent";
import styles from './tours.module.css'
import ToursCard from "./ToursCard";
import './tours.css'
import { useParams, useRouter } from "next/navigation";
import ToursApi from "./api/ToursApi";
import Header from "@/components/home/home-v1/Header";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/home-v3/footer";

// export const metadata = {
//   title: "About  || Homez - Real Estate NextJS Template",
// };

const ToursUk = () => {

const Data = ToursApi()






  return (
    <>
     <div className="wrapper ovh">
          <Header />


          <div className="MobileMenu ">

            <MobileMenu />
          </div>

        </div>
       <div className="Tours-services-style1 ">
            <div className="text-center d-flex flex-column justify-content-center align-items-center h-100  ">
              <h4 className={`${styles.title}`}>TOURS UK</h4>
              <p className={`${styles.desc}`}>{Data?.total} Tours</p>
            <div className="w-75">
            <HeroContent/>
            </div>
            </div>
          </div>
<ToursCard Data={Data?.data}/>
            
          <Footer />
           
    
    </>
  );
};

export default ToursUk;
