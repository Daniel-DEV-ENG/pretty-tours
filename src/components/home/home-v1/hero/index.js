import AdvanceFilterModal from "@/components/common/advance-filter";
import HeroContent from "./HeroContent";

const Hero = ({Data}) => {
  return (
    <>
      <div className="inner-banner-style1 text-center  d-flex flex-column gap-5">
        <div className="Pretty-Tours-container mb-5">
        <h3 className="Pretty-Tours animate-up-1 " > {Data?.hero_title} </h3>


        <h3 className="hero-content  hero-container animate-up-2 mt-5" >  {Data?.hero_body}</h3>
        </div>
      
      </div>
     

      
    </>
  );
};

export default Hero;
