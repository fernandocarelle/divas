import React, { Component } from 'react'
import SingleServices from '../../Components/SingleServices'

class Services extends Component {

    state = {
        services: [
            {   
                id: 1,
                name: "Pé e mão + SPA dos pés",
                obs: "*Válido Terças e Quartas",
                description: "Manicure e pedicure: retirada de cutículas e pintura das unhas dos pés e mãos nas cores desejadas pela cliente",  
                price: "R$39,00", 
                price2: "R$74,01",
            },
                
            {   
                id: 2,
                name: "Sobrancelha + Buço", 
                description: "Depilação com cera ou pinça, o tratamento diminui a espessura do pelo e retarda seu crescimento. Todo material é descartável. " , 
                price: "R$58,00", 
                price2: "R$63,00",
                
            },
            {
                id: 3,
                name: "Aplicação + Escova", 
                description: "Dê uma nova cor aos cabelos por meio de aplicação: feita em todo o cabelo, ela colore o cabelo todo de maneira uniforme.", 
                price: "R$84,00", 
                price2: "R$120,00",
                
            },
            {
                id: 4,
                name: "Corte + Secagem", 
                description: "Um corte de cabelo e uma mudança no visual nunca é demais! Você pode só aparar as pontinhas ou mudar totalmente seu look, para dar ainda mais vida a sua aparência.", 
                price: "R$79,00",
                price2: "R$149,00",
                
            },
            {
                id: 5,
                name: "Coloração + Escova + Hidratação", 
                description: "Dê uma nova cor aos cabelos com a Coloração: feita em todo o cabelo, ela colore o cabelo por igual.", 
                price: "R$190,00",
                price2: "R$240,00",
            },
            {
                id: 6,
                name: "Luzes (topo 15 folhas)", 
                description: "Dê uma nova cor aos cabelos com as luzes * Válido de terça a quinta das 09h às 19h (exceto feriados e datas comemorativas). ", 
                price: "R$280,00",
                price2: "R$460,00",
                
            },
            {
                id: 7,
                name: "Luzes + Tonalização + Hidratação + Escova", 
                description: "Dê uma nova cor aos cabelos. Para complementar a mudança, a Escova Modeladora tem como objetivo alinhar os cabelos. ", 
                price: "R$420,00",
                price2: "R$680,00", 
                
            },
            {
                id: 8,
                name: "Meia Perna + Virilha Completa + Axila + Sobrancelha + Buço", 
                description: "O tratamento diminui a espessura do pelo e retarda seu crescimento. ", 
                price: "R$195,00",
                price2: "R$225,00",
                
            },
            {
                id: 9,
                name: "Carbox corporal - Pacote com 06 sessões", 
                description: "A Carboxiterapia é um tratamento usado no combate das celulites, estrias e flacidez, e também reduz gordura localizada. ", 
                price: "R$480,00",
                price2: "R$540,00",
                
            },
            {
                id: 10,
                name: "Pacote 4 Mãos + 2 Pés", 
                description: "Manicure e pedicure: retirada de cutículas e pintura das unhas dos pés e mãos nas cores desejadas pela cliente. ", 
                price: "R$110,00",
                price2: "R$148,00",
                
            },
            {
                id: 11,
                name: "Limpeza de Pele", 
                description: "A limpeza de pele é um procedimento que visa remover cravos, espinhas, células mortas ou outras impurezas da pele. ", 
                price: "R$85,00",
                price2: "R$100,00",
                
            },
            {
                id: 12,
                name: "Limpeza de pele + Peeling", 
                description: "O peeling é um tratamento estético que faz uma esfoliação profunda da pele. Fique com uma pele mais bonita e saudável!", 
                price: "R$99,00",
                price2: "R$120,00",
                
            },
            {
                id: 13,
                name: "Drenagem + Limpeza de Pele", 
                description: "Uma massagem que elimina o inchaço, ajuda a combater celulite e ajuda a emagrecer e perder a barriga. Além disso, ainda ativa o sistema imunológico.", 
                price: "R$150,00",
                price2: "R$220,00", 
                
            },
            {
                id: 14,
                name: "Progressiva Botox (Até 50cm)", 
                description: "É a técnica mais usada para deixar os cabelos com menos volume. Cuida profundamente dos cabelos, deixando seus fios com muito mais vitalidade e brilho.", 
                price: "R$190,00",
                price2: "R$250,00",
                
            },
            {
                id: 15,
                name: "Reconstrução Sebastian", 
                description: "Nutriçāo Sebastian: Proporciona hidratação e sedosidade aos cabelos, retendo a umidade com ação anti-frizz. Seu cabelo como você nunca viu antes!", 
                price: "R$140,00",
                price2: "R$220,00",
                
            },
            {
                id: 16,
                name: "Carbox Facial - Pacote com 06 sessões", 
                description: "O carboxiterapia estimula a formação de colágeno e novas fibras elásticas, ela é indicada para o tratamento das olheiras e rejuvenescimento facial", 
                price: "R$299,00",
                price2: "R$360,00",
    
            },
            {
                id: 17,
                name: "Virilha Simples + Perna Inteira", 
                description: "O tratamento diminui a espessura do pelo e retarda seu crescimento. É rápida, sem resíduos e todo material é descartável.", 
                price: "R$85,00",
                price2: "R$105,00",
                
            },
            {
                id: 18,
                name: "Pacote 4 Mãos + 2 Pés + 2 Sobrancelhas", 
                description: "O tratamento diminui a espessura do pelo e retarda seu crescimento. É rápida, sem resíduos e todo material é descartável.", 
                price: "R$160,00",
                price2: "R$224,00", 
            },
            {
                id: 19,
                name: "Dermaplaning - 04 Sessões", 
                description: "É uma novidade em rejuvenescimento facial baseado numa remoção física das camadas superficiais da pele e é feita com uma lâmina esterilizada de um bisturi ao longo da superfície cutânea da face e pescoço.", 
                price: "R$380,00", 
                price2: "R$600,00",

            },
            {
                id: 20,
                name: "Nutrição Wella + Escova", 
                description: "Nutriçāo Wella: Proporciona hidratação e sedosidade aos cabelos, retendo a umidade com ação anti-frizz. Seu cabelo como você nunca viu antes. Para complementar a mudança, uma Escova Modeladora", 
                price: "R$89,00",
                price2: "R$170,00", 
                
            },
            {
                id: 21,
                name: "Lash Lifting", 
                description: "é uma técnica desenvolvida para curvar naturalmente os cílios e deixá-los mais longos, através da aplicação de um produto em gel com proteção de silicone que, somados à coloração, produz efeito de curvex.", 
                price: "R$99,90",
                price2: "R$125,00", 
                
            },
            {
                id: 22,
                name: "Endermoterapia - Pacote 06 Sessões", 
                description: "Responsável por fazer uma sucção, estimulando o sistema circulatório onde há celulite ou gordura localizada.", 
                price: "R$360,00",
                price2: "R$540,00", 
                
            },
            {
                id: 23,
                name: "Perna Inteira + Sobrancelha + Buço + Axila", 
                description: "O tratamento diminui a espessura do pelo e retarda seu crescimento. Todo material é descartável.", 
                price: "R$178,00",
                price2: "R$223,00",
                
            },
            {
                id: 24,
                name: "Virilha Cavada + Sobrancelha + Buço", 
                description: "O tratamento diminui a espessura do pelo e retarda seu crescimento. Todo material é descartável.", 
                price: "R$94,00",
                price2: "R$118,00",
                
            },
            {
                id: 25,
                name: "Drenagem + Ultrasson 6 Sessões", 
                description: "Uma massagem que elimina o inchaço, ajuda a combater celulite e ajuda a emagrecer e perder a barriga. Além disso, ainda ativa o sistema imunológico.", 
                price: "R$700,00",
                price2: "R$1.100,00", 
                            },
            {
                id: 26,
                name: "Pump + Corrente Russa 6 Sessões", 
                description: "O Pump Up é a resposta para o sonho de levantar o bumbum. O procedimento é rápido, indolor e não invasivo, gerando resultados visíveis já na primeira sessão.", 
                price: "R$400,00",
                price2: "R$600,00", 
                
            },
            {
                id: 27,
                name: "Dermaplaning + Limpeza de Pele", 
                description: "É uma novidade em rejuvenescimento facial baseado numa remoção física das camadas superficiais da pele e é feita com uma lâmina esterilizada de um bisturi ao longo da superfície cutânea da face e pescoço.", 
                price: "R$100,00", 
                price2: "R$120,00",
                
            },
            {
                id: 28,
                name: "Endermoterapia + Ultrasson Pacote 06 Sessões", 
                description: "Responsável por fazer uma sucção, estimulando o sistema circulatório onde há celulite ou gordura localizada.", 
                price: "R$450,00",
                price2: "R$650,00", 
                
            },
            {
                id: 29,
                name: "Jato de Plasma", 
                description: "O tratamento tem a capacidade de melhorar manchas solares e de envelhecimento, estrias, cicatrizes, olheiras, retirada de pintas e verrugas, e amenizar linhas de expressão e flacidez.", 
                price: "R$300,00",
                price2: "R$350,00", 
                
            },
            {
                id: 30,
                name: "Clareamento de pele", 
                obs: "* Preço por área",
                description: "Para acabar com o problema, o clareamento é a melhor solução! Seja no rosto, virilha ou axilas, esse tratamento deixará a sua autoestima lá em cima.", 
                price: "R$69,00",
                price2: "R$89,00", 
                
            },            
        ]
    }

    render() {


        const members = this.state.services.map( e => {
            return (
                <div className="col-md-4" key={ e.id }>
                    <SingleServices 
                        id={ e.id }
                        name={ e.name }
                        description={ e.description }
                        price={ e.price }
                        price2={ e.price2 }
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
                                <h3 className="sec-title">Catálogo</h3>
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