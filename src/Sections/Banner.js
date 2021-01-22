import React from 'react'
import { Link } from 'react-router-dom'


const banner = props => {
    return (
        // Banner section start
        <section className="banner">
            <div className="spa-img">
                <img src={ require("../assets/images/modelo6.svg") } alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <span>Centro de Beleza & Estética </span>
                            <h2>Você mais Diva!</h2>
                            <p>Quando você muda a energia do seu corpo, você muda a energia da sua vida.</p>
                            <Link to={{ pathname: "https://bit.ly/agendadivas" }} target="blank" className="btn1" >Agende um horário</Link>
                            {/* <a className="video-btn" data-fancybox href="">
                                <i className="ti-control-play"></i>
                                Watch our story
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // Banner section end 
    )
}

export default banner