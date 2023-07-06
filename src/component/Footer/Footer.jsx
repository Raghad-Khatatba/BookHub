import React from 'react'
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
<footer>
  <div class="footer-top text-center">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-lg-6 text-center" data-aos="fade-up">
                  <h4 class="navbar-brand2">BookHub<span class="dot">.</span></h4>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                      classical Latin literature from</p>
                  <div class="col-auto social-icons">
                    <a href="#"><FaFacebook class="fa-brands FaFacebook"></FaFacebook></a>
                    <a href="#"><FaTwitter class="fa-brands FaTwitter"></FaTwitter></a>
                    <a href="#"><FaInstagram class="fa-brands fa-instagram"></FaInstagram></a>
                    <a href="#"><FaLinkedin class="fa-brands fa-pinterest"></FaLinkedin></a>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="footer-bottom text-center">
      <p class="mb-0">Copyright@2020. All rights Reserved</p>
  </div>
</footer>
</>
  )
}
