import React, { useState } from 'react'
import axios from 'axios';
/* import { Spinner } from 'react-activity';
import 'react-activity/dist/react-activity.css'; */


function Contact() {

    /* const [load, setLoad] = useState(false); */
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
        axios.post('https://api-email-divas.herokuapp.com/send',
            formData,
            {
                headers: {
                    "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                }
            })
            .then(response => { console.log(response.data); alert('Email enviado'); window.location.reload(); })
    }

    async function handleFormSubmit(event) {
        /* setLoad(true); */
        event.preventDefault();
        console.log(campos);
        await send(campos);
        /* setLoad(false); */
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
                            <div className="col-md-4 infos">
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
                                    <a href="https://bit.ly/agendadivas" target="blank">21 99436-4466</a>
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
                                    <button type="submit" className="btn1 btn1-round">Enviar</button>
                                    {/* <div className={load ? 'spinner' : 'spinnerFalse'} >
                                            <Spinner size={20} color='#F98B36' />
                                    </div> */}
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