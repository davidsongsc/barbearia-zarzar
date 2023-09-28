import React from 'react';

import { FaCheckCircle, FaExclamationCircle, FaTimesCircle } from 'react-icons/fa';
interface DisponibilidadeIconesProps {
    estado: 'disponivel' | 'ocupado' | 'indisponivel';
}
type Disponibilidade = "disponivel" | "ocupado" | "indisponivel";

interface DisponibilidadeIconesProps {
    estado: Disponibilidade;
}
const DisponibilidadeIcones: React.FC<DisponibilidadeIconesProps> = ({ estado }) => {
    let icone;

    // Escolha o ícone com base no estado
    if (estado === 'disponivel') {
        icone = <FaCheckCircle className="disponivel" color='green' />;
    } else if (estado === 'ocupado') {
        icone = <FaExclamationCircle className="ocupado" color='orange' />;
    } else if (estado === 'indisponivel') {
        icone = <FaTimesCircle className="indisponivel" color='red' />;
    }

    return (
        <div>
            {icone}
            {/* Aqui você pode adicionar mais informações ou estilos conforme necessário */}
        </div>
    );
};

export default DisponibilidadeIcones;
