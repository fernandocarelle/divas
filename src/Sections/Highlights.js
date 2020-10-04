import React, { Component } from 'react'
import SingleServices from '../Components/SingleServices'

class Services extends Component {

    state = {
        services: [
            {
                id: 28,
                name: 'Endermoterapia',
                description: 'Ele é responsável por fazer uma sucção da pele, estimulando o sistema circulatório onde há celulite ou gordura localizada. Assim, elimina esses incômodos, dispensando cirurgias e evitando cicatrizes desnecessárias.',

            },
            {
                id: 29,
                name: 'Jato de Plasma',
                description: 'O tratamento tem a capacidade de melhorar manchas solares e de envelhecimento, estrias, cicatrizes, olheiras, retirada de pintas e verrugas, e amenizar linhas de expressão e flacidez.',

            },           
        ]
    }

    render() {


        const members = this.state.services.map( e => {
            return (
                <div className="col-md-6" key={ e.id }>
                    <SingleServices 
                        id={ e.id }
                        name={ e.name }
                        description={ e.description }
                    />
                </div>
                
            )
        })

        return (
            // Team section start
            <section className="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 m-auto">
                            <div className="sec-heading">
                                <h3 className="sec-title">Destaques</h3>
                                <p>Sempre os melhores tratamentos a sua disposição</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        { members }
                    </div>
                </div>
            </section>
            // Team section end
        )
    }
    
}

export default Services