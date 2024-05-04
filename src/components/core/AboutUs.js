import React from 'react';

export default function AboutUs ({Data}){

    return(

        <section  >

        <div className="container">
          <div  class="row">
            <div className=" col-md-6 col-xs-12  " data-aos="fade-right" data-aos-delay="200">
            <h3 className="font-title about-title" data-aos="fade-left" data-aos-delay="200">About us</h3>
            <p className="font-content about-content" data-aos="fade-down" data-aos-delay="200">

              {Data?.about_paragraph}


            </p>
            {/* <p className="font-content about-content">Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris eleifend, id tempor purus ultricies.</p>
            <p className="font-content about-content">Curabitur efficitur luctus enim nec sollicitudin. Fusce venenatis venenatis lorem eu accumsan. Nunc sit amet mi vitae odio porttitor feugiat. Sed quis sem elementum, viverra ligula at, lobortis magna. Praesent congue nibh in dolor rutrum, et euismod quam elementum.
Mauris justo felis, iaculis quis sagittis sit amet, feugiat vitae est. Aliquam porta ex elit, sit amet rutrum turpis egestas viverra. Quisque at libero purus. </p> */}
              <div className="we-strive">

            <h4 className="font-title " data-aos="fade-up" data-aos-delay="200"> {Data?.about_highlight_box}</h4>
              </div>
            </div>
            <div className=" col-md-6 col-xs-12  " data-aos="fade-left" data-aos-delay="200">
              <img className="img-Group" src="/images/Group 45.svg" />
              </div>
          </div>
        </div>
        
      </section>

    )

}