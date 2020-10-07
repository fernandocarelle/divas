import React, { Component } from 'react'
import SingleMember from '../Components/SingleMember';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

class Team extends Component {

    state = {
        members: [
            {
                id: 1,
                name: 'Larissa Antunes',
                specialist: 'Cabeleireira',
                social: {
                    whatsapp: "https://facebook.com",
                    twitter: "https://twitter.com",
                    instagram: "https://instagram.com"
                }
            },
            {
                id: 2,
                name: 'Júlia Fontana',
                specialist: 'Esteticista',
                social: {
                    facebook: "https://facebook.com",
                    twitter: "https://twitter.com",
                    instagram: "https://instagram.com",
                    googlePlus: "https://google.com"
                }
            },
            {
                id: 3,
                name: 'Laura Siqueira',
                specialist: 'Depiladora',
                social: {
                    facebook: "https://facebook.com",
                    twitter: "https://twitter.com",
                    instagram: "https://instagram.com",
                    googlePlus: "https://google.com"
                }
            },
            {
                id: 1,
                name: 'Larissa Antunes',
                specialist: 'Cabeleireira',
                social: {
                    facebook: "https://facebook.com",
                    twitter: "https://twitter.com",
                    instagram: "https://instagram.com"
                }
            },
            {
                id: 2,
                name: 'Júlia Fontana',
                specialist: 'Esteticista',
                social: {
                    facebook: "https://facebook.com",
                    twitter: "https://twitter.com",
                    instagram: "https://instagram.com",
                    googlePlus: "https://google.com"
                }
            },
            {
                id: 3,
                name: 'Laura Siqueira',
                specialist: 'Depiladora',
                social: {
                    facebook: "https://facebook.com",
                    twitter: "https://twitter.com",
                    instagram: "https://instagram.com",
                    googlePlus: "https://google.com"
                }
            }              
        ]
    }

    render() {

        let members = 'Loading...'
        if( this.state.members.length) {
            members = <OwlCarousel
                autoplay
                className="test-caro"
                dots={true}
                items={3}
                loop
                margin={0}
                nav={false}
            > 
            {
                this.state.members.map( memb => {
                    return (
                        <div  key={ memb.id }>
                    <SingleMember 
                        id={ memb.id }
                        name={ memb.name }
                        speciality={ memb.specialist }
                        social={ memb.social }
                    />
                </div>
                    )
                })
            }
            </OwlCarousel>
        }

        return (
            // Team section start
            <section className="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 m-auto">
                            <div className="sec-heading">
                                <h3 className="sec-title">Nosso Time</h3>
                                <p>Profissionais altamente qualificados!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row membros">
                        { members }
                    </div>
                </div>
            </section>
            // Team section end
        )
    }
    
}

export default Team


