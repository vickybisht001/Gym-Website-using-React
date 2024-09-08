import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    return (
      <>

        <div className='contact-header'>
          <img src="https://preview.colorlib.com/theme/gymlife/img/breadcrumb-bg.jpg.webp" alt="" />
          <div className='header-title'>
            <h1>Contact us</h1>
          </div>

          <div className="contact-page">  
            <div className='address-section'>
              <span>contact us</span>
              <h2>get in touch</h2>
              <div className='ct-text'>
                <i class='bx bx-location-plus'></i>
                <p className='mx-3'>333 Middle Winchendon Rd, Rindge,
                  NH 03461</p>
              </div>
              <div className='ct-text'>
                <i class='bx bxs-phone'></i>
                <p className='mx-3'>125-711-811 125-668-886</p>
              </div>
              <div className='ct-text'>
                <i className='bx bx-envelope'></i>
                <p className='mx-3'>Support.gymcenter@gmail.com</p>

              </div>
            </div>
            <div className='form-section'>
              <form className='form' action=''>
                <input type="text" name="name" id="" placeholder='Name' />
                <input type="text" name="mail" id="" placeholder='Email' />
                <input type="text" name="website" id="" placeholder='Website' />
                <textarea name="comment" id="" cols="30" placeholder='Comment'></textarea>
                <button className="form-btn">submit</button>

              </form>
            </div>
          </div>

          <div className='map-section'>
            <div className="container">

              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d224114.77392011767!2d77.2046848!3d28.635955199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724648933660!5m2!1sen!2sin" className='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

        </div>
      </>
    )
  }
}

export default Contact
