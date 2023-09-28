import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Style.css';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/pagina/Menu';
import Agendamentos from './components/pagina/Agendamentos';
import Footer from './components/Footer';

const App: React.FC = () => {

  return (
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
    </>
  );
};

export default App;

