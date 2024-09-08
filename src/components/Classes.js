import React, { Component } from 'react'

export class Classes extends Component {
  render() {
    return (
      <>
        <div className="classes">
          <img src="https://preview.colorlib.com/theme/gymlife/img/breadcrumb-bg.jpg.webp" alt="" />
          <div className='class-text'>
            <h1>classes details</h1>
          </div>
          <div className='classes-details'>
            <div className='classes-details-text'>
              <img src="https://preview.colorlib.com/theme/gymlife/img/classes/class-details/class-detailsl.jpg.webp" alt="" />
              <h2>body building</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, porro natus at modi perferendis fugiat veritatis, nam beatae magni eveniet id magnam consequuntur distinctio quidem exercitationem culpa laudantium asperiores libero blanditiis, itaque corporis! Provident beatae unde dolorum! Blanditiis veniam, iure consequuntur perferendis ipsa quasi repudiandae mollitia expedita maxime? Eum, facere.</p>
              <h2>trainer</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam nihil quisquam neque rem ipsa animi, corporis eos, ullam a ducimus nesciunt sed laudantium totam praesentium distinctio sint sapiente ex tempora. Similique, voluptate, dolores delectus temporibus voluptas exercitationem veritatis, alias animi soluta a est aut odio distinctio. Quia voluptatem hic dolor?</p>
              <div className='trainer-profile'>
                <div className='tr-pic'>
                  <img src="https://preview.colorlib.com/theme/gymlife/img/classes/class-details/trainer-profile.jpg.webp" alt="" />
                </div>
                <div className='tr-bio'>
                  <h5>Athart Rachel</h5>
                  <span>gym trainer</span>
                  <a href="/"><i className='bx bxl-facebook'></i></a>
                  <a href="/"><i className='bx bxl-twitter'></i></a>
                  <a href="/"><i className='bx bxl-youtube'></i></a>
                  <a href="/"><i className='bx bxl-instagram'></i></a>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eum rerum? Praesentium ratione odio eligendi saepe atque facilis minus odit non, quidem, impedit ducimus similique minima facere, quas est enim.</p>
                  <div className='tr-details'>
                    <ul>
                      <div className='d-flex justify-content-between my-1'>
                        <li>Age</li>
                        <span>35</span>

                      </div>
                      <div className='d-flex justify-content-between my-1'>
                        <li>weight</li>
                        <span>148lbs</span>
                      </div>
                      <div className='d-flex justify-content-between my-1'>
                        <li>height</li>
                        <span>10'2``</span>
                      </div>
                      <div className='d-flex justify-content-between my-1'>
                        <li>occuption</li>
                        <span>no-founder</span>
                      </div>

                    </ul>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, eligendi doloremque expedita nostrum quos eaque incidunt esse id molestias odit, iste atque in aliquam facilis, a ullam dolorem dignissimos aperiam!</p>

                </div>
              </div>



            </div>
            <div className='classes-categories'>
              <div className='so-categories'>
                <h5>categories</h5>
                <ul className='ct-list'>
                  <div className='d-flex justify-content-between my-1'>

                    <li><a href="#">yoga</a></li>
                    <span>12</span>
                  </div>
                  <div className='d-flex justify-content-between my-2'>
                    <li><a href="#">running</a></li>
                    <span>32</span>

                  </div>
                  <div className='d-flex justify-content-between my-2'>
                    <li><a href="#">weightloss</a></li>
                    <span>86</span>

                  </div>
                  <div className='d-flex justify-content-between my-2'>
                    <li><a href="#">cario</a></li>
                    <span>25</span>

                  </div>
                  <div className='d-flex justify-content-between my-2'>

                    <li><a href="#">body building</a></li>
                    <span>36</span>
                  </div>
                  <div className='d-flex justify-content-between my-2'>
                    <li><a href="#">nutrition</a></li>
                    <span>45</span>

                  </div>
                </ul>
              </div>

              <div className='latest-post'>
                <h5>latest posts</h5>
                <div className='lt-pic'>
                  <img src="https://preview.colorlib.com/theme/gymlife/img/letest-blog/latest-2.jpg.webp" alt="" />
                  <div className='lt-text'>
                    <p>Grilled Potato and Green Bean Salad</p>
                    <span>Aug 22, 2024</span>
                  </div>
                </div>
                <div className='lt-pic'>
                  <img src="https://preview.colorlib.com/theme/gymlife/img/letest-blog/latest-3.jpg.webp" alt="" />
                  <div className='lt-text'>
                    <p>The $8 French Rosé I Buy in Bulk Every Summer</p>
                    <span>Aug 22, 2024</span>
                  </div>
                </div>
                <div className='lt-pic'>
                  <img src="https://preview.colorlib.com/theme/gymlife/img/letest-blog/latest-4.jpg.webp" alt="" />
                  <div className='lt-text'>
                    <p>Ina Garten's Skillet-Roasted Lemon Chicken</p>
                    <span>Aug 22, 2024</span>
                  </div>
                </div>
                <div className='lt-pic'>
                  <img src="https://preview.colorlib.com/theme/gymlife/img/letest-blog/latest-5.jpg.webp" alt="" />
                  <div className='lt-text'>
                    <p>The Best Weeknight Baked Potatoes, 3 Creative Ways</p>
                    <span>Aug 22, 2024</span>
                  </div>
                </div>
                <div className='lt-banner'>
                  <img src="https://preview.colorlib.com/theme/gymlife/img/sidebar-banner.jpg.webp" alt="" />

                </div>

              </div>
            </div>



          </div>

          <div className='class-timetable'>

            <div className='table-section'>
              <h4>classes timetable</h4>
              <div className='table'>
                <table className='my-3 table-bordered'>
                  <thead>
                    <tr className='tb-head'>
                      <th>Time</th>
                      <th>Monday</th>
                      <th>Tuesday</th>
                      <th>Wednesday</th>
                      <th>Thursday</th>
                      <th>Friday</th>
                      <th>Saturday</th>
                      <th>Sunday</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='class-time'>6:00am-8:00am</td>
                      <td className='tb-content'>
                        <h5>weight loss</h5>
                        <span>RLefew D. Loee</span>
                      </td>
                      <td className='tb-content'>
                        <h5>cardio</h5>
                        <span>RLefew D. Loee</span>
                      </td>
                      <td className='tb-content'>
                        <h5>yoga</h5>
                        <span>Keaf Shen</span>
                      </td>
                      <td className='tb-content'>
                        <h5>fitness</h5>
                        <span>Kimberly Stone</span>
                      </td>
                      <td className='tb-content'>
                        <hr />

                      </td>
                      <td className='tb-content'>
                        <h5>boxing</h5>
                        <span>Rachel Adam</span>
                      </td>
                      <td className='tb-content'>
                        <h5>body building</h5>
                        <span>Robert Cage</span>
                      </td>
                    </tr>
                    <tr>
                      <td className='class-time'>10:00am-12:00am</td>
                      <td className='tb-content'>

                      </td>
                      <td className='tb-content'>
                        <h5>fitness</h5>
                        <span>Kimberly Stone</span>
                      </td>
                      <td className='tb-content'>
                        <h5>weight loss</h5>
                        <span>RLefew D. Loee</span>
                      </td>
                      <td className='tb-content'>
                        <h5>cardio</h5>
                        <span>RLefew D. Loee</span>
                      </td>
                      <td className='tb-content'>
                        <h5>body building</h5>
                        <span>Robert Cage</span>
                      </td>
                      <td className='tb-content'>
                        <h5>boxing</h5>
                        <span>Rachel Adam</span>
                      </td>
                      <td className='tb-content'>

                      </td>
                    </tr>
                    <tr>
                      <td className='class-time'>5:00pm-7:00pm</td>
                      <td className='tb-content'>
                        <h5>boxing</h5>
                        <span>Rachel Adam</span>
                      </td>
                      <td className='tb-content'>
                        <h5>karate</h5>
                        <span>Donald Grey</span>
                      </td>
                      <td className='tb-content'>
                        <h5>body building</h5>
                        <span>Robert Cage</span>
                      </td>
                      <td className='tb-content'>

                      </td>
                      <td className='tb-content'>
                        <h5>yoga</h5>
                        <span>Keaf Shen</span>
                      </td>
                      <td className='tb-content'>
                        <h5>cardio</h5>
                        <span>RLefew D. Loee</span>
                      </td>
                      <td className='tb-content'>
                        <h5>fitness</h5>
                        <span>Kimberly Stone</span>
                      </td>
                    </tr>
                    <tr>
                      <td className='class-time'>7:00pm-8:00pm</td>
                      <td className='tb-content'>
                        <h5>cardio</h5>
                        <span>RLefew D. Loee</span>
                      </td>
                      <td className='tb-content'>

                      </td>
                      <td className='tb-content'>
                        <h5>boxing</h5>
                        <span>Rachel Adam</span>
                      </td>
                      <td className='tb-content'>
                        <h5>yoga</h5>
                        <span>Keaf Shen</span>

                      </td>
                      <td className='tb-content'>
                        <h5>karate</h5>
                        <span>Donald Grey</span>
                      </td>
                      <td className='tb-content'>
                        <h5>boxing</h5>
                        <span>Rachel Adam</span>
                      </td>
                      <td className='tb-content'>
                        <h5>weight loss</h5>
                        <span>RLefew D. Loee</span>
                      </td>
                    </tr>
                  </tbody>
                </table>

              </div>

            </div>
          </div>
        </div>



      </>
    )
  }
}

export default Classes
