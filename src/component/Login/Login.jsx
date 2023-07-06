import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import regImg from "../../images/img2.jpg";
import logoImg from "../../images/logo.png"
import "./Login.css"
export default function Login(CurrentUser) {

    let [errors, setErrors] = useState([]);
    let [statusError, setStatusError] = useState('');
    let navigate = useNavigate();

    const schema = Yup.object({
        email: Yup.string().required("email is required").email("not valid email"),
        password: Yup.string().required("password is required"),
    })

    let formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        }, validationSchema: schema,
        onSubmit: SendLoginData,
    })

    async function SendLoginData(values) {
        let { data } = await axios.post("https://king-prawn-app-3mgea.ondigitalocean.app/auth/login", values)
            .catch((err) => {
                console.log(err);
            });

        if (data.message === 'Done') {
            setErrors([]);
            setStatusError('');
            localStorage.setItem("userToken", data.access_token);
            CurrentUser.saveCurrentUser();
            navigate('/home');
        }
      
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login Page</title>
                <meta name="description" content="Login Page" />
            </Helmet>
            <div className='container mt-2 w-80 m-auto'>

                {errors.map((error) => {
                    return <div className='text-danger'>{error.message}</div>
                })}
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
                <form onSubmit={formik.handleSubmit}>
                    <label className="form-label">Email :</label>
                    <input type="email" name="email" className="form-control" placeholder='Enter your Email'
                        value={formik.values.email}
                        onChange={formik.handleChange} />
                     {formik.errors.email?<p className='alert alert-danger mt-2'>{formik.errors.email}</p>:''}


                    <label className="form-label">Password :</label>
                    <input type="password" name="password" className="form-control" placeholder='Enter your Password'
                        value={formik.values.password}
                        onChange={formik.handleChange} />
                     {formik.errors.password?<p className='alert alert-danger mt-2'>{formik.errors.password}</p>:''}

                    <button className='custom-button btn2'> <Link to="/home" className="link">Login </Link></button><br></br>
                    <button className='custom-button'> <Link to="/register" className="link">Register </Link></button>
                </form>
            </div>
            </div>
      </div>
        </>
    )
}