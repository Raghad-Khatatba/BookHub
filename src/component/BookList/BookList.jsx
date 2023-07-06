import React from 'react';
import { useGlobalContext } from '../../context.';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
//https://covers.openlibrary.org/b/id/240727-S.jpg

export default function BookList() {
    const {books, loading, resultTitle} = useGlobalContext();
    const navigate = useNavigate();
    const booksWithCovers = books.map((singleBook) => {
      return {
        ...singleBook,
        // removing /works/ to get only id
        id: (singleBook.id).replace("/works/", ""),
        cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
      }
    });
  
    if(loading) return <Loading />;
  
    return (
      <section className='booklist'>
        <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/home")}>
              <FaArrowLeft size = {22} />
              <span className='fs-18 fw-6'>Go Back</span>
          </button>
          <div className='section-title'>
            <h2>{resultTitle}</h2>
          </div>
          <div className='booklist-content grid'>
            {
              booksWithCovers.slice(0, 30).map((item, index) => {
                return (
                  <Book key = {index} {...item} />
                )
              })
            }
          </div>
        </div>
      </section>
    )
}
