import React from 'react'
import styles from './bookings.module.css'
import GetBooking from '../../api/getBooking'

export default function Bookings() {
    const Data = GetBooking()

    console.log("🚀 ~ Bookings ~ Data:", Data)
    return (
        <>
            {Data?.map((book, index) =>
            (
                <div className={`${styles.Bookings} d-flex justify-content-between`} key={index}>
                    <div className=" d-flex align-items-center gap-4">
                        <div className={` ${styles.Border}`}></div>
                        <div className='d-flex flex-column'>
                            <span className={`${styles.City}`}>{book.name}</span>
                            <span className={`${styles.Time}`}>{book.net_profit}</span>
                        </div>
                    </div>
                    <div className={`${styles.SecOne}  d-flex flex-column align-items-center gap-1`}>
                        <div className='d-flex align-items-center'>
                            <div className={`${styles.Icon}`}>
                                <i class="fa-solid fa-calendar-days"></i>
                            </div>
                            <div className="d-flex flex-column">

                                <span className={`${styles.Date}`}>Date</span>
                                <span className={`${styles.DateValue}`}>{book.date}</span>
                            </div>
                        </div>
                        <div className='d-flex align-items-center '>
                            <div className={`${styles.Icon}`}>
                                <i class="fa-solid fa-clock"></i>
                            </div>
                            <div className="d-flex flex-column">

                                <span className={`${styles.Date}`}>Destination</span>
                                <span className={`${styles.DateValue}`}>{book.destination}</span>
                            </div>
                        </div>

                    </div>
                    <div className={`${styles.SecOne}  d-flex flex-column align-items-center gap-1`}>
                        <div className='d-flex align-items-center'>
                            <div className={`${styles.Icon}`}>
                                <i class="fa-light fa-user-group"></i>
                            </div>
                            <div className="d-flex flex-column">

                                <span className={`${styles.Date}`}>Guests</span>
                                <span className={`${styles.DateValue}`}>{book.guests_count}</span>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className={`${styles.Icon}`}>
                                <i class="fa-light fa-dollar-sign"></i>
                            </div>
                            <div className="d-flex flex-column">

                                <span className={`${styles.Date}`}>Price</span>
                                <span className={`${styles.DateValue}`}>{book.price_per_guest}</span>
                            </div>
                        </div>

                    </div>
                    <div className=" d-flex  align-items-center gap-4 ">
                        <div className="">
                            <button className={`${styles.Detalis}`}>Details</button>

                        </div>
                        <div className="">

                            <button className={`${styles.BtnDetalis}`}>
                                <i class="fa-thin fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )




            )

            }


        </>
    )
}
