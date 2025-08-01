import { useEffect } from "react"

const Service = () => {
    useEffect(() => {
  document.title = 'Service page of my Fitness - GYM'
  
  }, [])
  return (
    <section className='header-section'>
      <div className='bg-section'>
        <div className="bg-text">
          <h1>Service</h1>
        </div>
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

      <div className='banner-section'>
        <div className='banner-text'>
          <h1>Register now to get more deals</h1>
          <p>Where health, beauty and fitness meet.</p>
          <button className='ap-btn'>Appointment</button>
        </div>
      </div>

      <div className='pricing-section'>
        <span>OUR PLAN</span>
        <h2>Choose your pricing plan</h2>
        <div className="container">
          <div className='price-box'>
            {[
              { title: "Class drop-in", price: "$39.00" },
              { title: "12 Month unlimited", price: "$99.00" },
              { title: "6 Month unlimited", price: "$59.00" },
            ].map((plan, i) => (
              <div key={i} className='box'>
                <h3>{plan.title}</h3>
                <span>{plan.price}</span>
                <h5>single class</h5>
                <p>
                  Free riding<br />
                  Unlimited equipments<br />
                  Personal trainer<br />
                  Weight losing classes<br />
                  Month to mouth<br />
                  No time restriction
                </p>
                <button className='box-btn'>Enroll Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
