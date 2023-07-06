import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

export default function About() {
    return (
        <section className='about'>
          <div className='container'>
            <div className='section-title'>
              <h2>About</h2>
            </div>
    
            <div className='about-content grid'>
              <div className='about-img'>
                <img src = {aboutImg} alt = "about Img" />
              </div>
              <div className='about-text'>
                <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
                <p className='fs-17'>"BookHub" is a website designed to provide users with a convenient way to search for books based on their interests, genres, or specific titles. The website aims to enhance the book discovery experience by offering a user-friendly interface and robust search functionality.</p>
                <p className='fs-17'>With "BookHub," users can easily enter their desired book titles, or keywords into the search bar, allowing them to explore a vast collection of books. The website provides relevant and comprehensive search results, enabling users to find their preferred books quickly. Users can browse through various categories and genres, explore popular books, and discover new releases.</p>
                <p className='fs-17'>Whether users are avid readers, students, or simply looking for their next captivating read, "BookHub" aims to be the go-to destination for finding and exploring a wide range of books, fostering a love for literature and encouraging a lifelong passion for reading.</p>
              </div>
            </div>
          </div>
        </section>
      )
}
