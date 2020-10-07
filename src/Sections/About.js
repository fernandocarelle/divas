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
                            <p>Há 07 anos no mercado, contamos com diversos profissionais com experiência, conhecimento técnico, domínio sobre as tendências e criatividade para a execução dos serviços de maneira a atender o desejo das nossas clientes. Estamos localizado no Bairro Jardim Icaraí em Niterói-RJ, um local dedicado à sua Beleza e Bem estar. <br/>  <br/> Ambiente aconchegante e equipamentos de ponta para que você tenha uma experiência incrível.  </p>
                        </div>
                        <Link to="/sobre" className="btn1 btn1-round" >Saiba mais</Link>
                    </div>
                </div>
            </div>      
        </section>
        // About section end 
        )
}

export default aboutSec