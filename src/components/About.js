import { useEffect } from "react"
const About = () => {
useEffect(() => {
  document.title = 'About page of my Fitness - GYM'

}, [])

  return (
      <section className='about-section'>
        <div className="bg-section">
          <div className="bg-text">
            <h1>About us</h1>
          </div>
        </div>
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
        <div className='aboutus-section'>
          <div className='aboutus-video'>
            <img src="https://preview.colorlib.com/theme/gymlife/img/about-us.jpg.webp" alt="" />
            <a href="https://youtu.be/P4L6pN1SfUQ?si=ES0statdvJmWdxD6"><i class='bx bx-play'></i></a>
          </div>
          <div className='aboutus-text'>
            <span>about us</span>
            <h1>what we have done</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae amet eos iusto odit odio eveniet nam inventore modi sit perferendis distinctio, nisi eius iste voluptatem, voluptas repellat temporibus accusamus quidem autem! Similique tenetur alias et rerum esse autem corrupti reiciendis dolores. Sed earum, eligendi deleniti placeat nobis in dignissimos fugit voluptates eos numquam cumque praesentium incidunt id temporibus. Consectetur quaerat quos impedit cumque culpa tenetur voluptates accusamus sit eum officia! Quos tenetur voluptatum quas voluptates debitis, voluptatibus repellat molestias officia error illo maiores tempore. Accusamus, voluptates corrupti deserunt ipsa cum, eius aliquid illo, minus reiciendis doloremque eaque quia aliquam sunt! You can do any type of excercise and you can see video and read more about any exercise.</p>
            <button className="aboutus-btn"><a href="https://www.healthline.com/health/fitness-exercise/at-home-workouts">Read more</a></button>
          </div>
        </div>
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

        <div className='banner-section'>
          <div className='banner-text'>
            <h1>Register now to get more deals</h1>
            <p>Where health, beauty and fitness meet.</p>
            <button className='ap-btn'>Appointment</button>
          </div>
        </div>
        <div id="carouselExampleAutoplaying" className="carousel slide ts-team">
          <div className="carousel-inner">
            <div className='carousel-title'>
              <span>Testimonial</span>
              <h2>Our cilent say</h2>
            </div>
            <div className="carousel-item active">
              <div className='carousel-text'>
                <img src="https://images.unsplash.com/photo-1660155002587-3b0efeeec64f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas tempora explicabo, dolorum adipisci, at quis ullam ad corrupti, necessitatibus iste exercitationem molestiae? In hic consequatur sequi culpa facilis saepe nobis?</p>
                <h4>marshmello comez</h4>
                <div className='rating-section'>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='carousel-text'>
                <img src="https://plus.unsplash.com/premium_photo-1669795612621-b07938a4269d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas tempora explicabo, dolorum adipisci, at quis ullam ad corrupti, necessitatibus iste exercitationem molestiae? In hic consequatur sequi culpa facilis saepe nobis?</p>
                <h4>Riya Sharma</h4>
                <div className='rating-section'>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='carousel-text'>
                <img src="https://images.unsplash.com/photo-1533681717801-1bbd2ec8d269?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas tempora explicabo, dolorum adipisci, at quis ullam ad corrupti, necessitatibus iste exercitationem molestiae? In hic consequatur sequi culpa facilis saepe nobis?</p>
                <h4>Natasha</h4>
                <div className='rating-section'>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
  )
}

export default About
