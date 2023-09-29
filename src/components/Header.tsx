import React, { useState, useRef, useEffect } from 'react';
import { FaTiktok, FaFacebook, FaInstagram, FaYoutube, FaSearch } from 'react-icons/fa';
import VideoPlayer from './pagina/Video';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [isImageVisible, setImageVisible] = useState(false);
    const tamIcone = [18, 'aliceblue'];
    const handleMouseEnter = () => {
        setImageVisible(true);
    };

    const handleMouseLeave = () => {
        setImageVisible(false);
    };

    // Estado local para links da segunda parte
    const [isLink1Visible, setLink1Visible] = useState(false);
    const [isLink2Visible, setLink2Visible] = useState(false);
    const [isLink3Visible, setLink3Visible] = useState(false);
    const [isLink4Visible, setLink4Visible] = useState(false);

    return (
        <header >
            <div className="header-links">
                <div>
                    <nav>
                        <ul>
                            <li>

                                <a href="https://www.instagram.com/tz_zarzar/">
                                    <FaTiktok size={tamIcone[0]} color={String(tamIcone[1])} />
                                </a>
                            </li>
                            <div className="divider">|</div>
                            <li>
                                <a href="https://www.instagram.com/tz_zarzar/">
                                    <FaFacebook size={tamIcone[0]} color={String(tamIcone[1])} />
                                </a>
                            </li>
                            <div className="divider">|</div>
                            <li>
                                <a href="https://www.instagram.com/tz_zarzar/">
                                    <FaInstagram size={tamIcone[0]} color={String(tamIcone[1])} />
                                </a>
                            </li>
                            <div className="divider">|</div>
                            <li>
                                <a href="https://www.instagram.com/tz_zarzar/">
                                    <FaYoutube size={tamIcone[0]} color={String(tamIcone[1])} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>
                                Inicio
                            </Link>
                        </li>
                        <div className="divider">|</div>
                        <li>

                            <Link to={"/agendamentos"}>
                                Agendamentos
                            </Link>
                        </li>
                        <div className="divider">|</div>
                        <li>
                            <Link to={"/"}>
                                Galeria
                            </Link>
                        </li>
                        <div className="divider">|</div>


                        <li>
                            <a href="/contato">Contato</a>
                        </li>
                        <div className="divider">|</div>
                        <li>
                            <a href="/contato">
                                <FaSearch />
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>

            <div className="hoverable-element"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className='navegacao'>
                    <div className="logo">

                        <img src="https://img.freepik.com/vetores-premium/design-de-logotipo-de-barbearia-de-luxo_313044-6.jpg" alt="Barbearia Zarzar" />

                    </div>

                    <nav>
                        <ul>
                            <li>
                                <a href="/"
                                    onMouseEnter={() => setLink1Visible(true)}
                                    onMouseLeave={() => setLink1Visible(false)}>
                                    <div className={`hover-effect ${isLink1Visible ? 'visible' : 'hidden'}`}>
                                        <img src="https://svgsilh.com/svg/1781443.svg" alt="Imagem" />
                                    </div>

                                    <div>
                                        <h1>
                                            Barba
                                        </h1>
                                    </div>
                                </a>

                            </li>
                            <li>
                                <a href="/"
                                    onMouseEnter={() => setLink2Visible(true)}
                                    onMouseLeave={() => setLink2Visible(false)}>
                                    <div className={`hover-effect ${isLink2Visible ? 'visible' : 'hidden'}`}>
                                        <img src="https://images.vexels.com/media/users/3/158080/isolated/preview/4d415db6cb9793ac76e795b1c9653f6c-icone-de-estilo-de-cabelo-masculino.png" alt="Imagem" />
                                    </div>

                                    <div className='texto-navegador'>
                                        <h1>
                                            Cabelo
                                        </h1>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="/"
                                    onMouseEnter={() => setLink4Visible(true)}
                                    onMouseLeave={() => setLink4Visible(false)}>
                                    <div className={`hover-effect ${isLink4Visible ? 'visible' : 'hidden'}`}>
                                        <img src="https://svgsilh.com/svg/36290.svg" alt="Imagem" />
                                    </div>

                                    <div>
                                        <h1>
                                            Loja
                                        </h1>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>


        </header>
    );
};

export default Header;
