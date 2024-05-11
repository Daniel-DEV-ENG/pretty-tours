import React from 'react'
import styles from './DetalisHeader.module.css'

import '../detalis.css'
import moment from 'moment'

export default function DetalisHeader({Data}) {
console.log("🚀 ~ DetalisHeader ~ Data:", Data)




const firstImage = Data?.image_links?.[0];
const secondImages = Data?.image_links?.slice(1, 3);
const thirdImages = Data?.image_links?.slice(3, 5);


  return (
    <>
            <div className="IMG" >

          <div className="img-container  ">
    <div  className={` container  ${styles.container}`}>
    <div className="row justify-content-center align-items-center  " data-aos="fade-left" data-aos-delay="200">
    <div className="row tour-name  justify-content-between align-items-center ml-2">
            <div className='col-md-6 tour-name'>
            <h1 className='font-title ' style={{fontSize:"48px",fontWeight:"700",color:"#fff"}}>{Data?.title} </h1>

            </div>
            <div className=' col-md-6 text-end d-inline'>
            <span className='font-content tour-name' style={{fontSize:"16px",fontWeight:"600",color:"#fff"}}>Save <i class="fa-thin fa-heart" style={{color:"#fff"}}></i></span>
            <span className='ml-3 font-content tour-name'style={{fontSize:"16px",fontWeight:"600",color:"#fff"}}>Share <i class="fa-thin fa-arrow-up-from-bracket" style={{color:"#fff"}}></i></span>

            </div>
        </div>


    {/* <div className='row'>

      <div className="col-lg-7 col-md-12 mb-3 ">
        <img
          src={process.env.NEXT_PUBLIC_IMAGES + Data?.image_links?.[0]}
          className={ `${styles.mainImg}  `}
          alt="Main Image"
        />
      </div>
      <div className="col-lg-5 mb-3 col-md-12 gap-1 d-flex flex-column justify-content-center ">
        <div className="row ml-4 ">
          <div className="col-md-6">
            <img
          src={process.env.NEXT_PUBLIC_IMAGES + Data?.image_links?.[0]}
          style={{ height: "281.3px", width: "210.3px" }}
              className={`${styles.ItemImg} `}
              alt="Image 1"
            />
          </div>
          <div className="col-md-6">
            <img
          src={process.env.NEXT_PUBLIC_IMAGES + Data?.image_links?.[0]}
          style={{ height: "281.3px", width: "210.3px" }}
              className={`${styles.ItemImg} `}
              alt="Image 2"
            />
          </div>
        </div>
        <div className="row ml-4 ">
          <div className="col-md-6">
            <img
          src={process.env.NEXT_PUBLIC_IMAGES + Data?.image_links?.[0]}
          style={{ height: "281.3px", width: "210.3px" }}
              className={`${styles.ItemImg} `}
              alt="Image 3"
            />
          </div>
          <div className="col-md-6">
            <img
          src={process.env.NEXT_PUBLIC_IMAGES + Data?.image_links?.[0]}
          style={{ height: "281.3px", width: "210.3px" }}
              className={`${styles.ItemImg} `}
              alt="Image 4"
            />
          </div>
        </div>
      </div>
    </div> */}

<div className="row">
<div className="col-lg-7 col-md-12 mb-3">
  <img
    src={process.env.NEXT_PUBLIC_IMAGES + firstImage}
    className={ `${styles.mainImg}  `}
    alt="Main Image"
  />
</div>
<div className="col-lg-5 mb-5 col-md-12  d-flex flex-column  ">
  <div className="row ">
    {secondImages?.map((image, index) => (
      <div key={index} className="col-md-4 my-1 mb-1 ml-5">
        <img
          src={process.env.NEXT_PUBLIC_IMAGES + image}
          style={{ height: "281.3px", width: "192.3px" }}
          className={`${styles.ItemImg} `}
          alt={`Image ${index + 1}`}
        />
      </div>
    ))}
  </div>
  <div className="row">
    {thirdImages?.map((image, index) => (
      <div key={index} className="col-md-4 my-1 mb-1 ml-5">
        <img
          src={process.env.NEXT_PUBLIC_IMAGES + image}
          style={{ height: "281.3px", width: "192.3px" }}
          className={`${styles.ItemImg} `}
          alt={`Image ${index + 3}`}
        />
      </div>
    ))}
  </div>
</div>
</div>
</div>


{/* <div className='row' >
{Data?.image_links?.map((image,index)=>(
  <>
    <div  className="col-lg-7 col-md-12 mb-3">
      <img
        src={process.env.NEXT_PUBLIC_IMAGES + image}
        className={ `${styles.mainImg}  `}
        alt="Main Image"
      />
    </div>

    <div className="col-lg-5 mb-3 col-md-12 gap-1 d-flex flex-column justify-content-center ">
        <div className="row ml-4 ">
          <div className="col-md-6">
            <img
        src={process.env.NEXT_PUBLIC_IMAGES + image}
        style={{ height: "281.3px", width: "210.3px" }}
              className={`${styles.ItemImg} `}
              alt="Image 1"
            />
          </div>
        </div>


        </div>
  </>

))}
</div> */}


    </div>
  </div>
  </div>


<div className="IMG">

<div className="img-container  " data-aos="fade-up" data-aos-delay="200">
<div className={` ${styles.containerMobile}`}>
<div className="row justify-content-center align-items-center  ">

<div className="col-lg-7 col-md-12 mb-3">

<img
src='/images/main-img.jpg'
style={{ height: "397px", maxWidth: "693px" }}
className={ `${styles.mainImg} `}
alt="Main Image"
/>
</div>

</div>
</div>
</div>
</div>

  </>

  )
}
