import React, { Component } from 'react'

export class Carousel extends Component {
    render() {
        return (
            <>
                <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://preview.colorlib.com/theme/gymlife/img/hero/hero-1.jpg.webp" alt="" className='w-100' />

                            <div className="container">
                                <div className="carousel-caption text-end">
                                    <span>SHAPE YOUR BODY</span>

                                    <h1>Be <strong>strong</strong> <br /> traning hard</h1>

                                    <a href="/">Get Info</a>

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">

                            <img src="https://preview.colorlib.com/theme/gymlife/img/hero/hero-2.jpg.webp" alt="" className='w-100' />

                            <div className="container">
                                <div className="carousel-caption text-end">
                                    <span>SHAPE YOUR BODY</span>

                                    <h1>Be <strong>strong</strong> <br /> traning hard</h1>

                                    <a href="/">Get Info</a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>





            </>


        )
    }
}

export default Carousel
