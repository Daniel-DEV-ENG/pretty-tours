import React from 'react'
 import '../detalis.css'
  import  styles from'./Destiations.module.css'
  import Accordion from 'react-bootstrap/Accordion';
import moment from 'moment';

export default function Destiations({Data}) {

  
  return (
    <>
    <div className={`row justify-content-between ${styles.Destiations} `} data-aos="fade-up" data-aos-delay="200">
        <div className="col-md-8">
            <div className={`${styles.DestiationsContainer} Destiations-container d-flex justify-content-between align-items-center`}>
                <div>
                <h3 className='font-title' style={{fontWeight:"700",fontSize:"36px",color:"#181D24"}}>Destiations</h3>
                <p className='font-content'style={{fontWeight:"500",fontSize:"16px",color:"#181D24"}}>{Data?.guests_count} guests/24 Remaining</p>

                </div>
                <div className={`d-flex ${styles.Check}  gap-5`}>
                    <div>
                <h3 className='font-title' style={{fontWeight:"700",fontSize:"24px",color:"#181D24"}}>Check in</h3>
                <p className='font-content'style={{fontWeight:"500",fontSize:"16px",color:"#181D24"}}>From {moment(Data?.check_in).format('MM/DD/YYYY hh:mm')}</p>

                    </div>
                    <div>

                <h3 className='font-title' style={{fontWeight:"700",fontSize:"24px",color:"#181D24"}}>Check out</h3>
                <p className='font-content'style={{fontWeight:"500",fontSize:"16px",color:"#181D24"}}>From {moment(Data?.check_out).format('MM/DD/YYYY hh:mm')}</p>
                    </div>

                </div>
            </div>
            <div className="tour-plan">
                <h3 className='font-title ' style={{fontWeight:"700",fontSize:"36px",color:"#181D24"}}>Tour Plan</h3>
</div>

{Data?.events?.map((plan,index)=>(
  <>
      <div className={`${styles.verticalstepper} mt-5`}>
      <div className={ `${styles.Step} d-flex gap-3`}>
  <div className= {` ${styles.StepCount}`}>
     <span>
      {index+1}
      </span>
     </div>
  <div>
    <h3 className={`${styles.StepTitle} `}> {plan?.title}</h3>
    <div class={`${styles.StepContent}`}>
      <p class={`${styles.Description} `}>{plan?.description}</p>

      <div className="d-flex gap-4 ">
        <span><i class="fa-solid fa-circle fa-2xs mr-1"></i> {plan?.accommodation} Star Accommodation</span>
        <span><i class="fa-solid fa-circle fa-2xs mr-1"></i> {plan?.meals} Star Accommodation</span>
      </div>
    </div>
  </div>
</div>
  </div>
  
  </>
))}







        </div>
        <div  className={`${styles.Activeties} col-md-4  `}>
            <div className="Activeties text-center ">
                <h1 className={`font-title Activeties-title`} >Activeties</h1>
                <div className="text-start d-flex flex-column Activeties-content">
                  {Data?.activities?.map((val,i)=>(
                    
                    <span key={i}><i className='fa-solid fa-circle fa-2xs mr-3'></i> {val?.title}</span>
                  ))}

    
            
               
               
              
              
                </div>
            </div>
        </div>

       
</div>
{/* ***************** */}



 <div className={ `row justify-content-between  ${styles.DestiationsForMobile}`}>
        <div className="col-md-8">
            <div className=" d-flex justify-content-start  align-items-start">
                <div>

                <h3 className={ `font-title ${styles.TourName}`} style={{fontWeight:"700",fontSize:"36px",color:"#181D24"}}>Tour Name</h3>
                <p className='font-title'style={{fontWeight:"700",fontSize:"20px",color:"#181D24"}}>Dalmatia</p>
            <div className="d-flex flex-column">

                  <span className='font-content'  style={{fontWeight:"500",fontSize:"16px",color:"#181d24"}}>8 guests  / 280m2</span>
                  <span className='font-content'  style={{fontWeight:"500",fontSize:"16px",color:"#181d24"}}>6 bedrooms / 6 bathrooms</span>
            </div>
                </div>

            </div>
            <div className={`d-flex   gap-5 mt-4`}>
                    <div>
                <h3 className='font-title' style={{fontWeight:"700",fontSize:"24px",color:"#181D24"}}>Check in</h3>
                <p className='font-content'style={{fontWeight:"500",fontSize:"16px",color:"#181D24"}}>From 04:00</p>

                    </div>
                    <div>

                <h3 className='font-title' style={{fontWeight:"700",fontSize:"24px",color:"#181D24"}}>Check in</h3>
                <p className='font-content'style={{fontWeight:"500",fontSize:"16px",color:"#181D24"}}>From 04:00</p>
                    </div>

                </div>
        </div>
        <div className="col-md-4">
            <div className={`${styles.ActivetiesMobile} text-center `}>
                <h1 className={`${styles.ActivetiesTitle}  font-title Activeties-title `}>Contact</h1>
                <div className="text-start d-flex flex-column Activeties-content">
                  <ul>
                    <li className='font-content' style={{color:"#fff",fontWeight:"500",fontSize:"16px"}}><i style={{color:"#F5E9D6"}} className='fa-solid fa-circle fa-2xs mr-1'></i> +00 000 000 00</li>
                    <li className='font-content' style={{color:"#fff",fontWeight:"500",fontSize:"16px"}}><i style={{color:"#F5E9D6"}} className='fa-solid fa-circle fa-2xs mr-1'></i> +00 000 000 00</li>
                    <li className='font-content' style={{color:"#fff",fontWeight:"500",fontSize:"16px"}}><i style={{color:"#F5E9D6"}} className='fa-solid fa-circle fa-2xs mr-1'></i> +00 000 000 00</li>
                    <p className='font-content mt-2' style={{fontWeight:"500",fontSize:"16px",color:"#fff"}}>Preferred contact method: EmailLanguages: English , Croatia</p>
                  </ul>
                      
                    <button className={`${styles.BtnOffer}`}>Get an offer</button>
                </div>
                
            </div>
            <div className={` text-center ${styles.Accordion} `}>

            <Accordion  bsPrefix='accordion'  defaultActiveKey="">
      <Accordion.Item eventKey="0" >
        <Accordion.Header className={`${styles.BtnAccordion}`} >Amenities</Accordion.Header>

        <Accordion.Body style={{backgroundColor:"#F5F3F1"}} className='text-start '>
            <h5 className='font-title' style={{fontWeight:"700",fontSize:"20px",color:"#181d24"}}>Distances</h5>

        </Accordion.Body>
        <Accordion.Body style={{backgroundColor:"#F5F3F1"}}>
     
        <ul className="list-unstyled row" >
    <li className="col-6"><i className="fa-solid fa-circle fa-2xs mr-1"></i> d</li>
    <li className="col-6"><i className="fa-solid fa-circle fa-2xs mr-1"></i> d</li>
    <li className="col-6"><i className="fa-solid fa-circle fa-2xs mr-1"></i> d</li>
    <li className="col-6"><i className="fa-solid fa-circle fa-2xs mr-1"></i> d</li>
  </ul>

    <hr className={`${styles.HrCustom}`}/>
             
        </Accordion.Body>


        <Accordion.Body style={{backgroundColor:"#F5F3F1"}} className='text-start '>
            <h5 className='font-title' style={{fontWeight:"700",fontSize:"20px",color:"#181d24"}}>Kitchen & dining</h5>
        </Accordion.Body>
        <Accordion.Body style={{backgroundColor:"#F5F3F1"}}>
     
        <ul className="list-unstyled row" >
    <li className="col-6"><i className="fa-solid fa-circle fa-2xs mr-1"></i> d</li>
    <li className="col-6"><i className="fa-solid fa-circle fa-2xs mr-1"></i> d</li>
    <li className="col-6"><i className="fa-solid fa-circle fa-2xs mr-1"></i> d</li>
    <li className="col-6"><i className="fa-solid fa-circle fa-2xs mr-1"></i> d</li>
  </ul>

             
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
    </div>


        </div>

       
</div>
        
    </>
  )
}
