import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid">
            <NavLink className="navbar-brand ms-3" to="/"><img src="https://preview.colorlib.com/theme/gymlife/img/logo.png.webp" alt="" /></NavLink>
            <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className={(e) => { return e.isActive ? "active-col" : "" }} to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={(e) => { return e.isActive ? "active-col" : "" }} to="/about">About Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={(e) => { return e.isActive ? "active-col" : "" }} to="/class">Classes</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={(e) => { return e.isActive ? "active-col" : "" }} to="/service">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={(e) => { return e.isActive ? "active-col" : "" }} to="/team">Our Team</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className={(e) => { return e.isActive ? "active-col" : "" }} to="/contact">Contact</NavLink>
                </li>

              </ul>
              <div className='nav-media'>
                <a href="/"><i className='bx bxl-facebook'></i></a>
                <a href="/"><i className='bx bxl-twitter'></i></a>
                <a href="/"><i className='bx bxl-youtube'></i></a>
                <a href="/"><i className='bx bxl-instagram'></i></a>

              </div>

            </div>
          </div>
        </nav>


      </>
    )
  }
}

export default Navbar
