import React from 'react';
import VideoPlayer from './pagina/Video';
import { FaTiktok, FaFacebook, FaInstagram, FaYoutube, FaSearch } from 'react-icons/fa';
import TelaCarregamento from './corpo/TelaCarregamento';

const Footer = () => {

    return (
        <footer>
            <div className={`barbearia`}>
                <h1>Zarzar Cortes</h1>
                <VideoPlayer />
            </div>
            <div className='redes-sociais'>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">
                                    <FaTiktok color='black' size={40} />
                                </a>
                            </li>

                            <li>
                                <a href="/">
                                    <FaFacebook color='black' size={40} />
                                </a>
                            </li>

                            <li>
                                <a href="/contato">
                                    <FaInstagram color='black' size={40} />
                                </a>
                            </li>

                            <li>
                                <a href="/">
                                    <FaYoutube color='black' size={40} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='mapa-site'>
                <nav>
                    <ul>
                        <h2>Site</h2>
                        <li>
                            Pagina Inicial
                        </li>
                        <li>
                            Agendamentos
                        </li>
                        <li>
                            Galeria
                        </li>
                        <li>
                            Contato
                        </li>
                        <li>
                            Pesquisa
                        </li>
                    </ul>
                    <ul>
                        <h2>Usuario</h2>
                        <li>
                            Entrar
                        </li>
                        <li>
                            Cadastro
                        </li>
                        <li>
                            Esqueci a senha
                        </li>

                    </ul>
                    <ul>
                        <h2>Serviços</h2>
                        <li>
                            Maquina
                        </li>
                        <li>
                            Maquina & Tesoura
                        </li>
                        <li>
                            Tesoura
                        </li>
                        <li>
                            Barba
                        </li>
                        <li>
                            Sombrancelha
                        </li>
                        <li>
                            Coloração
                        </li>
                    </ul>
                    <ul>
                        <h2>Contato</h2>
                        <li>
                            (21) 9 9876-5432
                        </li>

                    </ul>
                </nav>
            </div>
            <div className='galeria'>
                <main>
                    <section>
                        <aside>

                        </aside>
                    </section>
                </main>
            </div>
        </footer>
    );
};

export default Footer;
