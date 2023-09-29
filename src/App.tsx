import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Style.css';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/pagina/Menu';
import Agendamentos from './components/pagina/Agendamentos';
import Footer from './components/Footer';
import TelaCarregamento from './components/corpo/TelaCarregamento';

const App: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const minDelay = 800; // 1 segundo em milissegundos
    const maxDelay = 3900; // 4 segundos em milissegundos
    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
    // Inicie o carregamento com o atraso aleatório
    setTimeout(() => {
      setLoading(false);
    }, randomDelay);
  }, []);
  return (
    <>
      <TelaCarregamento statusCarregamento={isLoading} />
      {!isLoading &&
        <>
          <Menu />
          <Router>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/agendamentos" element={<Agendamentos />} />
                {/* Adicione mais rotas conforme necessário */}

              </Routes>

            </main>
          </Router>
          <Footer />
        </>}
    </>
  );
};

export default App;

