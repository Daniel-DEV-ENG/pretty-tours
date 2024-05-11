"use client"

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './BookTour.module.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';
import { DateRange } from 'react-date-range';
import { useForm, Controller } from 'react-hook-form';
import CalendarCO from './calendar';
import axios from 'axios';
import { headers } from '../../../../../next.config';
import moment from 'moment';
import NavigateToLogin from './modelLogin';

export default function BookTour({Data}) {
console.log("🚀 ~ BookTour ~ Data:", Data)
const [modalIsOpen, setModalIsOpen] = useState(false);
  const [state, setState] = useState([
    {
      startDate: '2024-05-19',
      endDate: '2024-05-30',
      key: 'selection'
    }
  ]);

console.log(state)
  const { control, handleSubmit } = useForm();
const [selectedAvailableDay,SetSelectedAvailableDay]=useState('')
const [selectedNumberOfGuests,SetSelectedNumberOfGuests]=useState('')
const handleSelectedDay =(date)=>{
  SetSelectedAvailableDay(date)
}
const handleguests =(event) => {

  SetSelectedNumberOfGuests(event.target.value)
}
  const onSubmit =async (data) => {

    // Handle form submission here
    console.log(data);
    const formData = new FormData()
    const FormateDate = moment(selectedAvailableDay).format('DD-MM-YYYY')
    formData.append('date',FormateDate)
    formData.append('guests_count',data.guests)
    formData.append('phone',data.phoneNumber)
    formData.append('name',data.name)
    formData.append('message',data.message)
    try {
      const response = await axios.post(`https://backend.prettytours.net/api/tours/${Data.id}/book`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      // Replace '/api/login' with your actual API endpoint for login
      if (response.data) {
      console.log("🚀 ~ onSubmit ~ response.data:", response.data)
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // فتح الحوار عند الخطأ 401
        setModalIsOpen(true);
      } else {
        console.error('Error submitting data:', error);
        alert('error submitting data');
      }
    }
  };

  return (
    <>
      <div className={`bg-section ${styles.bookTourSection}`} data-aos="fade-up" data-aos-delay="200">
        <Container>
          <Row className="align-items-center">
            <Col md={5} className={`text-start ${styles.availabilityContainer}`}>
              <h3 className={`font-title ${styles.availabilityHeading}`}>Availability</h3>
              <CalendarCO Data={Data?.days} SetSelected={handleSelectedDay}/>
            </Col>
            <Col md={7} className={`${styles.bookTourContainer}`}>
              <h3 className={`font-title ${styles.bookTourHeading}`}>Book This Tour</h3>
              <div className={`${styles.bookTourBox} mt-4 text-center`}>
                <form onSubmit={handleSubmit(onSubmit)}>
                 <div className={`d-flex flex-column flex-md-row align-items-center gap-3 w-100 ${styles.bookTourForm}`}>
                  <div className={`w-100 ${styles.formGroup}`}>
                     <Controller
                      name="guests"
                      control={control}
                      render={({ field }) => (
                        <input {...field} aria-label="guests" placeholder="guests"  className={`w-100 bg-input text-white border-none ${styles.formInput} ${styles.CustomPlaceholder}`}  id="exampleInputName" onChange={handleguests} />

                      )}
                    />
                    {/* Other input fields */}
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <input {...field} aria-labe="name" placeholder="Name" className={`w-100 bg-input text-white border-none ${styles.formInput} ${styles.CustomPlaceholder}`}  id="exampleInputName" />

                      )}
                    />
                    <Controller
                      name="phoneNumber"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="number"
                          {...field}
                          className={`w-100 bg-input text-white border-none ${styles.formInput} ${styles.CustomPlaceholder}`}
                          id="exampleInputPhone"
                          aria-describedby="emailHelp"
                          placeholder="Phone"
                        />
                      )}
                    />

                    {/* Add other input fields (e.g., Phone) */}
                  </div>
                  <div className={`w-100 ${styles.formGroup}`}>
                
                    <Controller
                      name="message"
                      control={control}
                      render={({ field }) => (
                        <Form.Control
                          as="textarea"
                          rows={4}
                          className={`w-100 bg-input text-white border-none ${styles.formInput} ${styles.CustomPlaceholder}`}
                          id="exampleInputMessage"
                          placeholder="send message"
                        />

                      )}
                    />
                  </div>

</div>

                  <button type="submit" className={`btn-book font-content mt-4 ${styles.bookButton}`}>
                    Book
                  </button>
                </form>

              </div>
            </Col>
          </Row>
        </Container>
        <div className={`container ${styles.footerAvailability}`}>
          <div className={`d-flex justify-content-between bg-white ${styles.priceContainer}`}>
            <h4 className='font-content'>Price {Data?.price}</h4>
            <h4 className='font-content'>Total for {selectedNumberOfGuests} guests {Number(selectedNumberOfGuests*Data?.price)}</h4>
          </div>
          {modalIsOpen&& <NavigateToLogin open={modalIsOpen} setModalIsOpen={setModalIsOpen}/>}
        </div>
      </div>



     

    </>
  );
}