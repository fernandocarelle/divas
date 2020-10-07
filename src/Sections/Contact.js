import React, { Component, useState } from 'react'
import axios from '../axios-orders'

function Contact() {

    const [campos, setCampos] = useState({
        nome: '',
        email: '',
        mensagem: '',
        anexo: ''
    });
    function handleInputChange(event) {
        if (event.target.name === "anexo")
            campos[event.target.name] = event.target.files[0];
        else
            campos[event.target.name] = event.target.value;
        setCampos(campos);
    }

    function send() {
        const formData = new FormData();
        Object.keys(campos).forEach(key => formData.append(key, campos[key]));
        axios.post('https://api-divas.herokuapp.com/send',
            formData,
            {
                headers: {
                    "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                }
            })
            .then(response => { console.log(response.data); })
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(campos);
        send(campos);
        alert("Email enviado com sucesso!");
        window.location.reload();
    }

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
                                    <br /><br />
                                </address>
                                <address>
                                    <span className="ti-tablet"></span>
                                    <a href="tel:+552136191304(02)">21 3619-1304</a>
                                    <a href="http://bit.ly/vemprodivas" target="blank">21 99227-7167</a>
                                </address>
                            </div>
                            <div className="col-md-7 offset-md-1">
                                <form className="contact-form" onSubmit={handleFormSubmit}>


                                    <input
                                        type="text"
                                        name="nome"
                                        placeholder="Nome"
                                        onChange={handleInputChange}
                                        id="nome"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        onChange={handleInputChange}
                                        id="email"
                                        required
                                    />
                                    <textarea
                                        name="mensagem"
                                        placeholder="Escreva sua mensagem..."
                                        onChange={handleInputChange}
                                        id="mensagem"
                                        required
                                    ></textarea>
                                    {/* <label htmlFor="anexo">Anexo</label>
                                    <input type="file" id="anexo" name="anexo" /> */}
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

export default Contact

/* class Contact extends Component {

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

export default Contact */

/* const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }


    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (

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
                                        <br /><br />
                                    </address>
                                    <address>
                                        <span className="ti-tablet"></span>
                                        <a href="tel:+552136191304(02)">21 3619-1304</a>
                                        <a href="http://bit.ly/vemprodivas" target="blank">21 99227-7167</a>
                                    </address>
                                </div>
                                <div className="col-md-7 offset-md-1">
                                    <form onSubmit={this.handleSubmit} className="contact-form">
                                        <p>
                                            <label>
                                                <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Nome" />
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email" />
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <textarea name="message" value={message} onChange={this.handleChange} placeholder="Escreva sua mensagem..." />
                                            </label>
                                        </p>
                                        <p>
                                            <button className="btn btn-round" type="submit">Send</button>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Contact */