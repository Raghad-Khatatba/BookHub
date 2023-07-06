import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../../images/logo.png"
//import logoImg from "../../images/logo.png";
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar({logout}) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  const navigate = useNavigate();
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
  <div className='brand-and-toggler flex flex-sb'>
          <Link to="/" className='navbar-brand flex'>
            <img src={logoImg} alt="site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>bookhub</span>
          </Link>
        </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="" >Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="about">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" onClick={() => logout(navigate)}>LogOut</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}