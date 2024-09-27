import React from 'react'
import { useNavigate } from 'react-router-dom'
import '/src/ContactPage.css'
import { FaBackward } from "react-icons/fa";

const ContactPage = () => {
  let navigate =  useNavigate()
  return (
    <>
     <div className="contact-container">
      <h1>CONTACT PAGE</h1>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <div className="button-group">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button
            type="button"
            className="back-button"
            onClick={() =>{navigate(-1)}}
          ><FaBackward />
            
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default ContactPage