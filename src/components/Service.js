import React, { Component } from 'react'

export class Service extends Component {
  render() {
    return (
      <>

        <div className='header-section'>
          <img src="https://preview.colorlib.com/theme/gymlife/img/breadcrumb-bg.jpg.webp" alt="" />
          <div className='header-title'>
            <h1>Service Details</h1>

          </div>

          <div className="service-section">
            <span>What we do?</span>
            <h2>PUSH YOUR LIMITS FORWARD</h2>
            <div className='d-flex flex-wrap justify-content-center'>
              <div className='s-box'>

                <div className='pic'>
                  <img src="https://preview.colorlib.com/theme/gymlife/img/services/services-1.jpg.webp" alt="" />


                </div>
                <div className='service-text'>
                  <h4>personal training</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.</p>
                  <a href='#'>explore</a>

                </div>
              </div>

              <div className='s-box'>

                <div className='pic'>
                  <img src="https://preview.colorlib.com/theme/gymlife/img/services/services-2.jpg.webp" alt="" />


                </div>
                <div className='service-text'>
                  <h4>Group fitness classes</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.</p>
                  <a href='#'>explore</a>

                </div>
              </div>


            </div>



            <div className='d-flex flex-wrap justify-content-center'>
              <div className='s-box'>
                <div className='service-text'>
                  <h4>Strength training</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.</p>
                  <a href='#'>explore</a>

                </div>

                <div className='pic'>
                  <img src="https://preview.colorlib.com/theme/gymlife/img/services/services-3.jpg.webp" alt="" />


                </div>

              </div>

              <div className='s-box mb-5'>
                <div className='service-text'>
                  <h4>Body building</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.</p>
                  <a href='#'>explore</a>

                </div>

                <div className='pic'>
                  <img src="https://preview.colorlib.com/theme/gymlife/img/services/services-4.jpg.webp" alt="" />


                </div>

              </div>


            </div>


          </div>

          <div className='service-banner '>
            <div className='banner-text'>
              <h1>Exercise until the body obeys.</h1>
              <p>Where health, beauty and fitness meet.</p>
              <div className='pl-btn'>
                <a href="https://www.youtube.com/watch?v=EzKkl64rRbM"><i class='bx bx-play'></i></a>

              </div>

            </div>
          </div>

          <div className='sv-pricing-section'>
            <span>OUR PLAN</span>
            <h2>Choose your pricing plan</h2>
            <div className="container">
              <div className='price-box'>
                <div className='box'>
                  <h3>Class drop-in</h3>
                  <span>$39.00</span>
                  <h5>single class</h5>
                  <p>Free riding
                    Unlimited equipments
                    Personal trainer
                    Weight losing classes
                    Month to mouth
                    No time restriction</p>
                  <button className='box-btn'>Enroll-now</button>

                </div>
                <div className='box'>
                  <h3>12 Month unlimited</h3>
                  <span>$99.00</span>
                  <h5>single class</h5>
                  <p>Free riding
                    Unlimited equipments
                    Personal trainer
                    Weight losing classes
                    Month to mouth
                    No time restriction</p>
                  <button className='box-btn'>Enroll-now</button>

                </div>
                <div className='box'>
                  <h3>6 Month unlimited</h3>
                  <span>$59.00</span>
                  <h5>single class</h5>
                  <p>Free riding
                    Unlimited equipments
                    Personal trainer
                    Weight losing classes
                    Month to mouth
                    No time restriction</p>
                  <button className='box-btn'>Enroll-now</button>

                </div>
              </div>
            </div>
          </div>


        </div>
      </>
    )
  }
}

export default Service
