import { useEffect } from "react";

const MainContent = () => {
    useEffect(() => {
    document.title = "Transform Your Body, Elevate Your Life | Fitness - GYM"
  
  }, [])
  return (
    <>
      {/* WHY CHOOSE US SECTION */}
      <div className='choosen-section'>
        <span>Why choose us?</span>
        <h2>PUSH YOUR LIMITS FORWARD</h2>
        <div className='cs-item my-4'>
          <div className='cs-content'>
            <i className='bx bx-cycling'></i>
            <h4>Modern Equipment</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
          </div>
          <div className='cs-content'>
            <i className='bx bxl-apple'></i>
            <h4>Healthy Nutrition Plan</h4>
            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
          </div>
          <div className='cs-content'>
            <i className='bx bx-dumbbell'></i>
            <h4>Professional Training Plan</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
          </div>
          <div className='cs-content'>
            <i className='bx bxs-heart'></i>
            <h4>Unique to Your Needs</h4>
            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
          </div>
        </div>
      </div>

      {/* CLASSES SECTION */}
      <div className="classes-section">
        <span>Our Classes</span>
        <h2>WHAT WE CAN OFFER</h2>
        <div className='class-item'>
          {[
            {
              img: "class-1.jpg.webp",
              type: "STRENGTH",
              title: "WEIGHTLIFTING",
            },
            {
              img: "class-2.jpg.webp",
              type: "Cardio",
              title: "INDOOR CYCLING",
            },
            {
              img: "class-3.jpg.webp",
              type: "STRENGTH",
              title: "KETTLEBELL POWER",
            },
          ].map((cls, i) => (
            <div key={i} className='d-flex flex-column'>
              <img src={`https://preview.colorlib.com/theme/gymlife/img/classes/${cls.img}`} alt={cls.title} />
              <span className='text-center'>{cls.type}</span>
              <div className='cl-text'>
                <h4>{cls.title}</h4>
                <i className='bx bx-chevron-right cl-arrow'></i>
              </div>
            </div>
          ))}
        </div>

        <div className='class-item'>
          {[
            {
              img: "class-4.jpg.webp",
              type: "CARDIO",
              title: "INDOOR CYCLING",
            },
            {
              img: "class-5.jpg.webp",
              type: "TRAINING",
              title: "BOXING RING",
            },
          ].map((cls, i) => (
            <div key={i} className='d-flex flex-column'>
              <img src={`https://preview.colorlib.com/theme/gymlife/img/classes/${cls.img}`} alt={cls.title} />
              <span className='text-center'>{cls.type}</span>
              <div className='cl-text'>
                <h4>{cls.title}</h4>
                <i className='bx bx-chevron-right cl-arrow'></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BANNER SECTION */}
      <div className='banner-section'>
        <div className='banner-text'>
          <h1>Register now to get more deals</h1>
          <p>Where health, beauty and fitness meet.</p>
          <button className='ap-btn'>Appointment</button>
        </div>
      </div>

      {/* PRICING SECTION */}
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

      {/* GALLERY SECTION */}
      <div className='gallery-section'>
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div key={id} className='gallery-img'>
            <i className='bx bx-photo-album'></i>
            <img
              src={`https://preview.colorlib.com/theme/gymlife/img/gallery/gallery-${id}.jpg.webp`}
              alt={`Gallery ${id}`}
            />
          </div>
        ))}
      </div>

      {/* TEAM SECTION */}
      <div className='team-section'>
        <div className="container">
          <span>Our Team</span>
          <div className='section-title'>
            <h2>Train with Experts</h2>
            <button className='ap-btn'>Appointment</button>
          </div>
          <div className='slider'>
            <div className="slider-wrapper">
              <div className="img-list">
                {[1, 2, 3, 4, 5, 6].map((id) => (
                  <div key={id} className='img-item'>
                    <img
                      src={`https://preview.colorlib.com/theme/gymlife/img/team/team-${id}.jpg.webp`}
                      alt={`Trainer ${id}`}
                    />
                    <div className='img-text'>
                      <span>Athart Rachel</span>
                      <p>Gym Trainer</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
