import React from "react";
import Navbar from "../Navbar/Navbar";
// import ReactDOM from "react-dom";
import styles from './PaginaInicial.css'
const img = 'https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2014/05/cachorro-no-veterinario-01.jpg?fit=744%2C533&ssl=1&resize=1280%2C720'

 function PaginaInicial(){ 
        return (
            <div>
            <h1 className='sloganpetvet'>PETVET SMART</h1>
            <h3>Cuidando do seu bichinho</h3>
            <div className="paginaInicialbg">
            <img src={img} alt=''/>
            </div>
            <div className="text-paginaInicial">
           
            <h2>Somos uma empresa que sabe cuidar do que e mais importante para voce</h2>
            <p>O que faz um Veterinário?
O profissional que cuida da saúde e do bem-estar de animais é o veterinário. Ele dá assistência clínica e cirúrgica a animais domésticos e silvestres, cuida da saúde, alimentação e reprodução de rebanhos, controla doenças em grandes populações de animais, entre outras funções relacionadas à saúde animal.</p>
            
            <p>Assim como a Medicina, a Veterinária é uma carreira ampla, com um grande campo de atuação. O veterinário pode atuar desde no acompanhamento da saúde de animais de estimação até no controle de doenças em populações silvestres. E, além do contato direto com os animais, o veterinário também pode trabalhar no setor industrial, com o controle de qualidade dos produtos e inspeção dos processos produtivos. Em qualquer indústria que utilize matéria-prima de origem animal, a presença do veterinário para inspecionar esse material é indispensável. O veterinário também pode trabalhar em pesquisas na área de zoonoses e na venda de materiais de uso animal, como comidas, vacinas, brinquedos, acessórios etc.

O profissional está presente em clínicas veterinárias, petshops, zoológicos, áreas de conservação ambiental, centros de pesquisa, parques e bosques, centro de controle de pragas, secretaria do meio ambiente, centro de zoonoses, entre outros.

O veterinário pode, ainda, especializar-se em atuações específicas:

Medicina Veterinária Clínica: atendimento em clínicas para animais de estimação, realizando pequenas cirurgias caso necessário.
Veterinária Industrial: acompanhamento da fabricação de produtos de origem animal e de produtos e acessórios para animais, como ração para cães e gatos.
Medicina Veterinária Ambiental: estudo de animais silvestres em seu ambiente natural. O veterinário irá cuidar da saúde das espécies, identificando doenças, contribuindo para a preservação da biodiversidade, ajudar na reabilitação de animais cativos que serão devolvidos à natureza.
Controle e Tecnologia para Populações Animais: desenvolvimento das melhores técnicas para a criação e a nutrição de rebanhos, além da melhoria genética e reprodução.</p>
</div>
                </div>
        )
    }



export default PaginaInicial