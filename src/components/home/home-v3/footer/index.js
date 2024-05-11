import Image from "next/image";
import Link from "next/link";
import ContactMeta from "./ContactMeta";
import AppWidget from "./AppWidget";
import Social from "./Social";
import Subscribe from "./Subscribe";
import MenuWidget from "./MenuWidget";
import Copyright from "./Copyright";
import CardForm from "./CardForm";
import { Rectangle124 } from "./ImageFooter";
import styles from './footer.module.css'
import ContactApi from "./api/ContactApi";

const Footer = () => {

const Data = ContactApi()

  return (
    <div className="">
      {/* <Rectangle124 />
       */}
       <div>

         <img
        style={{
          maxHeight: "780px",
          boxShadow: "0px 4px 64px 0px rgba(0, 0, 0, 0.05)",
          objectFit: "cover",
        }}
        src="/images/Rectangle124.png"
      />
       </div>

      <div className={`section-footer ${styles.SectionFooter}`} >
        <div className=" ">
        <div className=" pl60 pr60 ">

<div className={`row  sectionConnect  ${styles.sectionConnect}`}>
  <div className="col-lg-4 col-sm-3">
    
      <h3 className={`font-title  text-center  ${styles.FontTitle}`}>{Data?.contact_section?.footer_title}</h3>
      <p className={`font-content text-center ${styles.FontContent}`}>{Data?.contact_section?.footer_body} </p>

  </div>
  <div className="col-lg-4 col-sm-3">
    <div className="row justify-content-center">
      <h3 className={`text-center font-title ${styles.FontTitle}`}> {Data?.box_title}</h3>
      <p className={`text-center p-0 ${styles.FontContent}`}>{Data?.contact_section?.phone}</p>
      <p className={`text-center p-0 ${styles.FontContent}`}>{Data?.contact_section?.email}</p>

      <div className="footer-icon d-flex gap-2 justify-content-center">
        <i class="fa-brands fa-facebook-f" ></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-whatsapp"></i>
        <i class="fa-brands fa-whatsapp"></i>
        <i class="fa-brands fa-whatsapp"></i>
      </div>

    </div>
  </div>
  {/* End .col */}

  <div className="col-md-6 col-lg-4 col-sm-3 ">
    <div className="footer-widget mb-4 mb-lg-5">

      <AppWidget />



    </div>
  </div>

</div>

</div>

        </div>

        <div style={{ position: 'relative', bottom: '140px', left: '75%' }}  className={`${styles.img}`}>
          <img src="/images/Footer img.png" alt="image" height={300} width={350} />

        </div>

        <div className={`${styles.Copyright}`} style={{ position: 'relative', bottom: '115px' }} >

        <Copyright />
        </div>
     


      </div>


    </div>
  );
};

export default Footer;
