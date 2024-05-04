import React from 'react';

export default function Specialities ({Data}){

    return(

        <section className="text-center">
        <h3 className="Title-Section"> {Data?.specialities_title}</h3>
          <div className="container">
        <div class="row  justify-content-around mt-5">
          <div className="col-lg-3 col-md-6 position-relative " data-aos="fade-up" data-aos-delay="200">
            <div className="d-flex flex-column align-items-start box-border card-res ">
              <img src="/images/water-waves.svg" className="Properties-Specialities-icon" />
              <h4 className="font-title Properties-Specialities-content mt-4"> {Data?.speciality_title_1}</h4>
              <p className="font-content Properties-Specialities-link">{Data?.speciality_subtitle_1}
                <img className="ml-2" src="/images/Arrow 1.svg" />
              </p>
            </div>
          </div>
      
          <div className="col-lg-3 col-md-6 " data-aos="fade-down" data-aos-delay="200">
            <div className="d-flex flex-column  align-items-start box-border card-res">
              <img src="/images/pawprint 1.svg" className="Properties-Specialities-icon" />
              <h4 className="font-title Properties-Specialities-content mt-4"> {Data?.speciality_title_2}</h4>
              <p className="font-content Properties-Specialities-link"> {Data?.speciality_subtitle_2}
                <img className="ml-2" src="/images/Arrow 1.svg" />
              </p>
            </div>
          </div>
      
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="d-flex flex-column align-items-start  box-border card-res">
              <img src="/images/Vector2.svg" className="Properties-Specialities-icon" />
              <h4 className="font-title Properties-Specialities-content mt-4"> {Data?.speciality_title_3}</h4>
              <p className="font-content Properties-Specialities-link"> {Data?.speciality_subtitle_3}
                <img className="ml-2" src="/images/Arrow 1.svg" />
              </p>
            </div>
          </div>
      
          <div className="col-lg-3 col-md-6 " data-aos="fade-down" data-aos-delay="200">
            <div className="d-flex flex-column align-items-start box-border card-res">
              <img src="/images/Vector3.svg" className="Properties-Specialities-icon" />
              <h4 className="font-title Properties-Specialities-content mt-4">Medical insurance</h4>
              <p className="font-content Properties-Specialities-link">Take a trip
                <img className="ml-2" src="/images/Arrow 1.svg" />
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

    )

}