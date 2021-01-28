import React, { Component } from 'react'
/* import SingleServices from '../Components/SingleServices' */

import cabeleireiro from '../assets/images/servicos/cabeleireiro.png'
import manicure from '../assets/images/servicos/manicure.png'
import depilacao from '../assets/images/servicos/depilacao.png'
import estetica from '../assets/images/servicos/estetica.png'
import sobrancelha from '../assets/images/servicos/sobrancelha.png'
import lash from '../assets/images/servicos/lash.png'

class Services extends Component {


    render() {

        return (
            // Team section start
            <section className="team teambg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 m-auto">
                            <div className="sec-heading">
                                <h3 className="sec-title">Destaques</h3>
                                <p>Sempre os melhores tratamentos a sua disposição</p>
                            </div>
                        </div>
                    </div>
                    <div className="destaqueServ col-md-12">
                       <p><img src={cabeleireiro} alt='Imagem Cabeleireiro' /></p> 
                       <p><img src={manicure} alt='Imagem Manicure' /></p>
                       <p><img src={depilacao} alt='Imagem Depilação' /></p>       
                    </div>
                    <div className="destaqueServ col-md-12">
                       <p><img src={estetica} alt='Imagem Estética' /></p> 
                       <p><img src={sobrancelha} alt='Imagem Sobrancelha' /></p>
                       <p><img src={lash} alt='Imagem Lash Lifting' /></p>       
                    </div>
                </div>
            </section>
            // Team section end
        )
    }
    
}

export default Services