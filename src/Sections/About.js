import React from 'react'
import { Link } from 'react-router-dom'

const aboutSec = props => {
    return (
        // About section start
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-md-12 m-auto">
                        <div className="sec-heading">
                            <img src={ require("../assets/images/china-rose.png") } alt="" />
                            <span className="tagline">Sobre</span>   
                            <h3 className="sec-title">Um lugar de inspiração!</h3>
                            <p>Há 07 anos oferecendo serviços de qualidade e atendimento personalizado. </p>
                        </div>
                        <Link to="/about" className="btn1 btn1-round" >Saiba mais</Link>
                    </div>
                </div>
            </div>      
        </section>
        // About section end 
        )
}

export default aboutSec