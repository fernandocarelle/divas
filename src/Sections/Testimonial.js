import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import SingleTestimonial from '../Components/SingleTestimonial';

class Testimonial extends Component {

    state = {
        testimonials: [
            {
                id: 1,
                name: 'Terezinha Pedroso',
                description: 'Excelente espaço para cuidar da beleza, com ótimos profissionais. Local agradável e confortável para se usufruir das necessidades e cuidados com cabelo, unhas e outros tratamentos com muita qualidade e confiança. Recomendo!!!',

            },
            {
                id: 2,
                name: 'Jessica Darossi',
                description: 'Adoro o atendimento de vocês, profissionais que fazem a diferença e nos fazem sentir diferentes, estão sempre na minha lista de prioridade e de recomendação.',

            },
            {
                id: 3,
                name: 'Nathali Oening',
                description: 'Sou fã do salão, possui uma energia maravilhosa! Meu dia fica melhor quando vou me cuidar com ele, além de sempre sair linda! Super recomendo!',

            }            
        ]
    }

    render() {

        // console.log(this.state.testimonials)

        let testimonials = 'Loading...'
        if( this.state.testimonials.length) {
            testimonials = <OwlCarousel
                autoplay
                className="test-caro"
                dots={true}
                items={1}
                loop
                margin={0}
                nav={false}
            > 
            {
                this.state.testimonials.map( tsml => {
                    return (
                        <SingleTestimonial 
                            key={tsml.userId}
                            id={ tsml.id }
                            name={ tsml.name }
                            description={ tsml.description }
                        />
                    )
                })
            }
            </OwlCarousel>
        }
        

        return (
            // Testimonial section start 
            <section className="testimonial bg-lightred">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-md-12 m-auto">
                            {testimonials}
                        </div>
                    </div>
                </div>
            </section>
            // Testimonial section end
        )
    }
}

export default Testimonial