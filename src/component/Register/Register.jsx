import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import regImg from "../../images/img2.jpg";
import logoImg from "../../images/logo.png"
import "./Register.css"

export default function Register() {
  const [errors, setErrors] = useState([]);
  const [statusError, setStatusError] = useState('');
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(3, 'Min is 3 characters').max(10, 'Max is 10 characters'),
    email: Yup.string().required('Email is required').email('Not a valid email'),
    password: Yup.string().required('Password is required').matches(/^[A-Za-z0-9]{3,7}$/, 'Password must be 3-7 characters long and alphanumeric'),
    cPassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password')], 'Passwords do not match'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      cPassword: '',
    },
    validationSchema,
    onSubmit: SendUserData,
  });

  async function SendUserData(values) {
    try {
      const response = await axios.post('https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup', values);

      if (response.data.message === 'success') {
        setErrors([]);
        setStatusError('');
        navigate('/Login');
      } else {
        console.log(response.data.message);
        setErrors(response.data.err[0]);
      }
    } catch (error) {
      console.log('Error:', error);
      // Handle error
    }
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register Page</title>
        <meta name="description" content="Register Page" />
      </Helmet>
      <div className="container mt-2 w-80 m-auto">
        {errors && (
          errors.map((error, index) => (
            <div className="text-danger" key={index}>{error.message}</div>
          ))
        )}
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container d-flex justify-content-center align-items-center">
    <Link to="/" className="navbar-brand d-flex align-items-center l1 ">
      <img src={logoImg} alt="site logo" className="logo-img" />
      <span className="text-uppercase fw-7 fs-24 ls-1 s1">bookhub</span>
    </Link>
  </div>
</nav>
      <div className="row">
        <div className="col-lg-6">
          <img src={regImg} alt="Image" className="img-fluid" />
        </div>
        
        <div className="col-lg-6">
        <h1 className="my-4 ">Register Now</h1>
        <form onSubmit={formik.handleSubmit} className='my-4'>
          <label className="form-label">Name :</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
      {formik.errors.name?<p className='alert alert-danger mt-2'>{formik.errors.name}</p>:''}

          <label className="form-label">Email :</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
 {formik.errors.email?<p className='alert alert-danger mt-2'>{formik.errors.email}</p>:''}
       

          <label className="form-label">Password :</label>
          <input
            type
            ="password"
            name="password"
            className="form-control"
            placeholder="Enter your Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        {formik.errors.password?<p className='alert alert-danger mt-2'>{formik.errors.password}</p>:''}

          <label className="form-label">Confirm Password :</label>
          <input
            type="password"
            name="cPassword"
            className="form-control"
            placeholder="Re-type your Password"
            value={formik.values.cPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
       {formik.errors.cPassword?<p className='alert alert-danger mt-2'>{formik.errors.cPassword}</p>:''}

          <button type = "submit" className="custom-button">
           Register
          </button>
        </form>
      </div>
      </div>
      </div>
    </>
  );
}
