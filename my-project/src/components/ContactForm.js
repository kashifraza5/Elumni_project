import React from 'react'
import "./ContactForm.css"
const ContactForm = () => {
  return (
    <div className='form-container'>
      <h1>Send a Messege To Us</h1>
      <form>
        <input placeholder='Name'/>
        <input placeholder='E_Mail'/>
        <input placeholder='Subject'/>
        <textarea placeholder='Messege' rows="4"></textarea>
        <button>Send Messege</button>
      </form>
    </div>
  )
}

export default ContactForm
