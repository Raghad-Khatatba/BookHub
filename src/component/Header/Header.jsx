import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Navbar from '../Navbar/Navbar'
import './Header.css'
export default function Header({logout}) {
  return (
    <div className='holder'>
    <header className='header'> 
    <Navbar logout={logout}/>
        <div className='header-content flex flex-c text-center text-white'>
            <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
            <p className='header-text fs-18 fw-3'>Enter their desired book titles, or keywords into the search bar</p>
            <SearchForm />
        </div>
    </header>
</div>
  )
}
