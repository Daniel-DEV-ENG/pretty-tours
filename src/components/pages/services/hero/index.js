import CardService from "@/components/core/CardService";
import VipServices from "../vip";


const HeroServices = ({title,subtitle,content,Data}) => {
  return (
    <>
      <div className="inner-banner-style1 text-center  d-flex flex-column gap-5">
        <div className="Pretty-Tours-container mb-5">
        <h3 className="Title-Section animate-up-1 font-title" data-aos="fade-left" data-aos-delay="200">{title}</h3>


        <h3 className="SubTittle-Section mb-5 animate-up-2 font-content" data-aos="fade-right" data-aos-delay="200">{subtitle}</h3>
        <CardService Data={Data}/>
        </div>
     
       
      </div>
     


    </>
  );
};

export default HeroServices;
