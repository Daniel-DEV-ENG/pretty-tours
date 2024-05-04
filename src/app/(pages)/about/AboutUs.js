import React from 'react';

export default function AboutUs ({Data}){

    return(
        <section  >
        <div className="container ">
          <div  class="row">
            <div className=" col-md-6 col-xs-12  ">
            <h3 className="font-title about-title text-center " data-aos="fade-left" data-aos-delay="200">{Data?.title_2}</h3>
            <p className="font-content about-content" data-aos="fade-right" data-aos-delay="200">
              {Data?.paragraph_2}
            </p>
              <div className="we-striveAbout">
            <h4 className="font-title " data-aos="fade-right" data-aos-delay="200"> {Data?.highlight_box_2}</h4>
              </div>
            </div>
            <div className=" col-md-6 col-xs-12  " data-aos="fade-down" data-aos-delay="200">
              <img className="img-Group" src="/images/Group 45.svg" />
              </div>
          </div>
        </div>
        
      </section>

    )

}