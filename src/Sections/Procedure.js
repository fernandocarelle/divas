import React, { Component } from 'react'
import SingleServices from '../Components/SingleServices'

class Services extends Component {

    state = {
        services: [
            {
                id: 3,
                name: 'Cabeleireiro',
                description: 'Ele é responsável por fazer uma sucção da pele, estimulando o sistema circulatório onde há celulite ou gordura localizada. Assim, elimina esses incômodos, dispensando cirurgias e evitando cicatrizes desnecessárias.',

            },
            {
                id: 1,
                name: 'Manicure',
                description: 'O tratamento tem a capacidade de melhorar manchas solares e de envelhecimento, estrias, cicatrizes, olheiras, retirada de pintas e verrugas, e amenizar linhas de expressão e flacidez.',

            },
            {
                id: 2,
                name: 'Estética',
                description: 'O tratamento tem a capacidade de melhorar manchas solares e de envelhecimento, estrias, cicatrizes, olheiras, retirada de pintas e verrugas, e amenizar linhas de expressão e flacidez.',

            },
            {
                id: 23,
                name: 'Depilação',
                description: 'O tratamento tem a capacidade de melhorar manchas solares e de envelhecimento, estrias, cicatrizes, olheiras, retirada de pintas e verrugas, e amenizar linhas de expressão e flacidez.',

            }          
        ]
    }

    render() {


        const services = this.state.services.map( e => {
            return (
                <div className="col-md-3" key={ e.id }>
                    <SingleServices 
                        id={ e.id }
                        name={ e.name }
                        
                    />
                </div>
                
            )
        })

        return (
            // Team section start
            <section className="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-10 m-auto">
                            <div className="sec-heading">
                                <h3 className="sec-title">Serviços</h3>
                                <p>Sempre os melhores tratamentos a sua disposição</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        { services }
                    </div>
                </div>
            </section>
            // Team section end
        )
    }
    
}

export default Services