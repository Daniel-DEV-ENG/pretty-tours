import AdvanceFilterModal from "@/components/common/advance-filter";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <>
      <div className="inner-banner-style1 text-center ">
        <div className="Pretty-Tours-container">
        <h6 className="Pretty-Tours animate-up-1 font-title">Pretty Tours</h6>


        <h2 className="hero-content content-bg-color animate-up-2"> YOUR GATEWAY TO UNIQUE TRAVEL EXPERIENCES</h2>
        </div>
      
        <HeroContent />
      </div>
      {/* End Hero content */}

      {/* <!-- Advance Feature Modal Start --> */}
      <div className="advance-feature-modal">
        <div
          className="modal fade"
          id="advanceSeachModal"
          tabIndex={-1}
          aria-labelledby="advanceSeachModalLabel"
          aria-hidden="true"
        >
          <AdvanceFilterModal />
        </div>
      </div>
      {/* <!-- Advance Feature Modal End --> */}
    </>
  );
};

export default Hero;
