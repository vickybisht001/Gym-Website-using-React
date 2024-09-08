import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="footer-section">
                <div className='footer-header'>
                    <div className='text-white d-flex'>
                        <i className='footer-icon bx bxs-location-plus'></i>
                        <p>333 Middle Winchendon Rd, Rindge,
                            NH 03461</p>


                    </div>
                    <div className='text-white d-flex'>
                        <i className='footer-icon bx bx-phone'></i>
                        <p>125-711-811 125-668-886</p>


                    </div>
                    <div className='text-white d-flex'>
                        <i className='footer-icon bx bx-envelope'></i>
                        <p>Support.gymcenter@gmail.com</p>


                    </div>

                </div>
                <div className="second-section">
                    <div>
                        <a className="navbar-brand ms-3" href="#"><img src="https://preview.colorlib.com/theme/gymlife/img/logo.png.webp" alt="" /></a>

                        <p className='footer-text my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aperiam corrupti necessitatibus impedit ea itaque aspernatur tenetur doloribus mollitia reprehenderit quasi, optio iste eveniet similique obcaecati aut porro. Possimus, ex!</p>
                        <div className='footer-media'>
                            <a href="/"><i class='bx bxl-facebook'></i></a>
                            <a href="/"><i class='bx bxl-twitter'></i></a>
                            <a href="/"><i class='bx bxl-youtube'></i></a>
                            <a href="/"><i class='bx bxl-instagram'></i></a>
                            <a href="/"><i className='bx bx-envelope'></i>
                            </a>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='mx-4'>


                            <h4 className='footer-heading'>
                                Useful links
                            </h4>
                            <ul className='footer-text'>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Classes</a></li>
                                <li><a href="/">Contact</a></li>

                            </ul>

                        </div>
                        <div>

                            <h4 className='footer-heading'>
                                Support
                            </h4>
                            <ul className='footer-text'>
                                <li><a href="/">Login</a></li>
                                <li><a href="/">My account</a></li>
                                <li><a href="/">Subscribe</a></li>
                                <li><a href="/">Contact</a></li>

                            </ul>
                        </div>
                    </div>

                    <div className=" mx-4">
                        <h4 className='footer-heading'>
                            Tips & Guides
                        </h4>
                        <p className='footer-text'>Physical fitness may help prevent depression, anxiety</p>
                        <ul className='com-list d-flex'>
                            <li> 3 min red </li>
                            <li>| 25 comment</li>
                        </ul>
                        <div>
                            <p className='footer-text'>Fitness: The best exercise to lose belly fat and tone up...</p>
                            <ul className='com-list d-flex'>
                                <li> 3 min red </li>
                                <li>| 25 comment</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className='copyright-text'>
                    <p>Copyright ©2024 All rights reserved | This template is made with ❤️ by JB</p>
                </div>

            </div>
        )
    }
}

export default Footer
