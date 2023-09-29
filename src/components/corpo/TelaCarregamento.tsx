import React from 'react';
import VideoPlayer from '../pagina/Video';
import { FaTiktok, FaFacebook, FaInstagram, FaYoutube, FaSearch } from 'react-icons/fa';
import Galeria from '../pagina/Galeria';
interface TelaCarregamentoProps {
  statusCarregamento: boolean;
}

const TelaCarregamento: React.FC<TelaCarregamentoProps> = ({ statusCarregamento }) => {
  const tamIcone = [52, 'black'];
  return (
    <>
      {statusCarregamento &&
        <div className='carregado'>
          <h1>Carregando...</h1>
          <div className={`barbearia`} >
            <h1>Zarzar Cortes</h1>
          </div>

      
          <div className={`barbearia`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '-8px 0px' }}>
          <Galeria />
          </div>
          <div>
            <nav>
              <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', listStyle: 'none', margin: '-8px 0px'}}>
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
        </div>
      }
    </>
  );
};

export default TelaCarregamento;
