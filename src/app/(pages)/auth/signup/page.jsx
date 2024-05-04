"use client"
import Link from "next/link";
import React from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from './signup.module.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from "next/navigation";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://backend.prettytours.net/api/register', data);
      // Replace '/api/signup' with your actual API endpoint for signup

      if (response.data.data.token) {
        // Assuming the server responds with a token
        localStorage.setItem('token', response.data.data.token);
        const userObject = response.data.data.user;
        localStorage.setItem('user', JSON.stringify(userObject));
      }

    } catch (error) {
      console.error('Error submitting data:', error);
      // You can handle the error here, e.g., display an error message
    }
  };

  return (
    <>
      <section className={`${styles.LoginSection}`}>
        <div className="container">
          <div className="row" data-aos="fade-left" data-aos-delay="300">
            <div className="col-lg-6">
              <img src="/images/login-img.png" width={618} height={816} className={`${styles.ImgAuth} img-fluid img-auth`} />
            </div>
            <div className="col-lg-6 mt-5">
              <div className="log-reg-form signup-modal form-style1  mt-3 p30-sm  bdrs12">
                <div className="text-start mb40">
                  <h2 className={`font-title ${styles.LogInTitle}`}>Sign up</h2>
                  <p className={`${styles.LogDesc}`}>Let's get you all st up so you can access your personal account.</p>
                </div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col>
                      <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Name"
                          {...register('name', { required: 'Name is required' })}
                        />
                        {errors.Name && <div className="text-danger">{errors.Name.message}</div>}
                      </FloatingLabel>
                    </Col>

                  </Row>
                  <Row>
                    <Col>
                      <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address',
                            },
                          })}
                        />
                        {errors.email && <div className="text-danger">{errors.email.message}</div>}
                      </FloatingLabel>
                    </Col>
                    <Col>
                      <FloatingLabel controlId="floatingPhoneNumber" label="Phone Number">
                        <Form.Control
                          type="number"
                          placeholder="Phone Number"
                          {...register('phone', { required: 'Phone Number is required' })}
                        />
                        {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber.message}</div>}
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 8,
                          message: 'Password must be at least 8 characters long',
                        },
                      })}
                    />
                    {errors.password && <div className="text-danger">{errors.password.message}</div>}
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password">
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      {...register('password_confirmation', {
                        required: 'Confirm Password is required',
                      })}
                      style={{ marginTop: "12px" }}
                    />
                    {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword.message}</div>}
                  </FloatingLabel>

                  {/* Remember Me Checkbox */}
                  <div className="mt-3 checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
                    <label className="custom_checkbox fz14 ff-heading">
                      I agree to all the Terms and Privacy Policies
                      <input
                        type="checkbox"
                        {...register('agree', { required: 'You must agree to the Terms and Privacy Policies' })}
                      />
                      <span className="checkmark" />
                    </label>
                    {errors.agree && <div className="text-danger">{errors.agree.message}</div>}
                  </div>
                  <div className="d-grid  mt-4">
                    <button className={`${styles.LogBtn}`} type="submit">
                      Create account

                    </button>
                  </div>
                  <p className="dark-color text-center mb0 mt10">
                    Already have an account ? {" "}
                    <Link className="dark-color fw600" href="/auth/login">
                      Login
                    </Link>
                  </p>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;