import React, { Component } from 'react'
import axios from '../axios-orders'

class Contact extends Component {

    state = {
        contactInfo: {
            firstName: '',
            email: '',
            message: '',
        },        
        messagePosted: false
    }

    inputChangeHandler = (e) => {

        const updatedContactInfo = {...this.state.contactInfo}
        updatedContactInfo[e.target.name] = e.target.value


        this.setState({
            ...this.state,
            contactInfo: updatedContactInfo
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()

        // console.log(prevComments, 'Comment form')
        axios.post("/contactInfo.json", this.state.contactInfo)
            .then( res => { 
                // console.log("Successfull")
                this.setState({
                    messagePosted: true
                })
                this.props.history.push('/')
            })
            .catch( err => {
                console.log(err.message)
            })
    }


    render () {
        
        return (
            // Contact section start
            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 m-auto">
                            <div className="sec-heading">
                            <h3 className="sec-title">Entre em contato</h3>
                            <p>Queremos te ouvir!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 col-md-12 m-auto">
                            <div className="row">
                                <div className="col-md-4">
                                    <address>
                                        <span className="ti-map-alt"></span>
                                        Rua Presidente João Pessoa 322 loja 105, Icaraí <br />
                                        Niterói, RJ
                                    </address>
                                    <address>
                                        <span className="ti-email"></span>
                                        <a href="mailto:example@leospa.com">contato@divasbeleza.com.br</a>
                                        <br/><br/>
                                    </address>
                                    <address>
                                        <span className="ti-tablet"></span>
                                        <a href="tel:+552136191304(02)">21 3619-1304</a>
                                        <a href="http://bit.ly/vemprodivas" target="blank">21 99227-7167</a>
                                    </address>
                                </div>
                                <div className="col-md-7 offset-md-1">
                                    <form className="contact-form" onSubmit={ this.onSubmitHandler }>
                                        <input 
                                            type="text" 
                                            name="firstName" 
                                            placeholder="Nome" 
                                            onChange={ this.inputChangeHandler}
                                            value={this.state.contactInfo.firstName} 
                                            required
                                        />
                                        <input 
                                            type="email" 
                                            name="email" 
                                            placeholder="Email" 
                                            onChange={ this.inputChangeHandler }
                                            value={this.state.contactInfo.email}
                                            required
                                        />
                                        <textarea 
                                            name="message" 
                                            placeholder="Escreva sua mensagem..."
                                            onChange={ this.inputChangeHandler }
                                            value={this.state.contactInfo.message}
                                            required
                                        ></textarea>
                                        <button type="submit" className="btn btn-round">Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            // Contact section end
        )
    }
}

export default Contact