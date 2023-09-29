import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // Array de estilos de cortes
    const estilosCortes = [
        {
            id: 1,
            nome: 'maquina',
            valor: 20,
            imagem: 'https://img.freepik.com/fotos-premium/barbeiro-de-homens-de-corte-de-cabelo-barbeiros-de-cabeleireiro-masculino-barber-corta-a-maquina-do-cliente-para-cortes-de-cabelo_217333-1099.jpg',
        },
        {
            id: 2,
            nome: 'maquina + tesoura',
            valor: 35,
            imagem: 'https://blog.beautyclass.tv/wp-content/uploads/2018/06/Cortar-cabelo-masculino-com-m%C3%A1quina-tesoura-ou-navalha-Beauty-Class.jpg',
        }, {
            id: 3,
            nome: 'tesoura',
            valor: 30,
            imagem: 'https://espacodabelle.com.br/upload_arquivos/2019/01/2019010288735001548201306.jpg',
        }, {
            id: 4,
            nome: 'barba',
            valor: 10,
            imagem: 'https://olindac.com/wp-content/uploads/revslider/barba.png',
        },
        {
            id: 5,
            nome: 'sombrancelha',
            valor: 6,
            imagem: 'https://apolobarbearia.com.br/wp-content/uploads/2022/12/Foto-2-2-1024x683.jpg',
        },
        {
            id: 6,
            nome: 'Coloração',
            valor: 35,
            imagem: 'https://i.pinimg.com/736x/00/74/e5/0074e5e1056df6883a4f069d4754efd1.jpg',
        },
        // Adicione mais estilos de cortes conforme necessário
    ];

    const handleLinkClick = () => {

    }
    return (
        <div className='home-lista-cortes'>
            <h2>Estilo do corte</h2>
            <ul>
                {estilosCortes.map((estilo) => (

                    <li key={estilo.id} style={{ backgroundImage: `url(${estilo.imagem})`, backgroundSize: 'cover' }}>
                        <Link to="/agendamentos">
                            <div>
                                <p style={{ textTransform: 'capitalize' }}>{estilo.nome}</p>
                            </div>
                            <div>
                                <h3>R$ {estilo.valor}</h3>
                            </div>
                        </Link>



                    </li>


                ))}
            </ul>
        </div >
    );
};

export default Home;
