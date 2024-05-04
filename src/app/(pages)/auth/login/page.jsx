"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from './login.module.css';
import '../login.css';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useRouter } from 'next/navigation';

const Login = () => {

  const router = useRouter();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://backend.prettytours.net/api/login', data);
      // Replace '/api/login' with your actual API endpoint for login
      if (response.data.data.token) {
        // Assuming the server responds with a token
        localStorage.setItem('token', response.data.data.token);
        const userObject = response.data.data.user;
        localStorage.setItem('user', JSON.stringify(userObject));
        router.push('/');

      }

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('error submitting data')
    }
  };

  return (
    <>


      <section className={`${styles.LoginSection}`}>

        <div className="container ">
          <div className="row" data-aos="fade-left" data-aos-delay="300">
            <div className="col-lg-6 mt-5">
              <div className="log-reg-form signup-modal form-style1  p50 p30-sm  bdrs12">
                <div className="text-start mb40">

                  <h2 className={`font-title ${styles.LogInTitle}`}>Login</h2>
                  <p className={` ${styles.LogDesc}`}>Login to access your Golobe account</p>
                </div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  {/* Email */}
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

                  {/* Password */}
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

                  {/* Remember Me Checkbox */}
                  <div className="mt-3 checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
                    <label className="custom_checkbox fz14 ff-heading">
                      Remember me
                      <input
                        type="checkbox"
                        {...register('rememberMe')}
                      />
                      <span className="checkmark" />
                    </label>
                    <a style={{ textDecoration: "none", color: "#112211" }} className="fz14 ff-heading mr-4" href="/auth/forgotpassword">
                      Forgot Password
                    </a>
                  </div>
                  <div className="d-grid  mt-4">
                    <button className={`${styles.LogBtn}`} type="submit">
                      Login
                    </button>
                  </div>
                  <p className="dark-color text-center mb0 mt10">
                    Dont have an account ? {" "}
                    <Link className="dark-color fw600" href="signup">
                      Sign up
                    </Link>
                  </p>
                </Form>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="/images/login-img.png" width={618} height={816} className={`img-auth img-fluid`} />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Login;
