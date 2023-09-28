import React, { useState, useEffect } from 'react';
import DisponibilidadeIcones from '../corpo/Disponibilidade';

const Agendamentos: React.FC = () => {
    const [mostrarTodasAsSemanas, setMostrarTodasAsSemanas] = useState(false);
    const [agendamentos, setAgendamentos] = useState<string[][]>([]); // Array de agendamentos
    const [horariosIndisponiveis, setHorariosIndisponiveis] = useState<string[]>([]); // Horários indisponíveis
    const [diaAtual, setDiaAtual] = useState(new Date()); // Obter a data atual

    const diasDaSemana = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

    // Função para gerar horários disponíveis
    const gerarHorarios = (diaAtual: Date) => {
        const horarios = [];
        const dataAtual = new Date(); // Obter a data e hora atual

        for (let hora = 10; hora <= 21; hora++) {
            for (let minuto = 0; minuto < 60; minuto += 30) {
                const horario = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}`;
                let disponibilidade: 'disponivel' | 'ocupado' | 'indisponivel' = 'disponivel';

                // Verificar se o dia é igual ao dia atual
                if (
                    diaAtual.getDate() === dataAtual.getDate() &&
                    diaAtual.getMonth() === dataAtual.getMonth() &&
                    diaAtual.getFullYear() === dataAtual.getFullYear()
                ) {
                    // Verificar se o horário é igual ou anterior ao horário atual
                    if (
                        dataAtual.getHours() > hora ||
                        (dataAtual.getHours() === hora && dataAtual.getMinutes() >= minuto)
                    ) {
                        disponibilidade = 'indisponivel'; // Marcar como indisponível
                    }
                }

                if (horariosIndisponiveis.includes(horario)) {
                    disponibilidade = 'indisponivel'; // Marcar como indisponível se também estiver na lista de horários indisponíveis
                }

                horarios.push({ horario, disponibilidade });
            }
        }

        return horarios;
    };


    // Função para gerar os próximos dias
    const gerarProximosDias = () => {
        const dataAtual = new Date();
        const dias = [dataAtual];

        for (let i = 1; i < (mostrarTodasAsSemanas ? 7 : 4); i++) {
            const proximoDia = new Date(dataAtual);
            proximoDia.setDate(dataAtual.getDate() + i);
            dias.push(proximoDia);
        }

        return dias;
    };

    // Função para agendar um horário em um dia específico
    const agendarHorario = (dia: Date, horario: string) => {
        // Crie uma cópia do estado atual de agendamentos
        const novosAgendamentos = [...agendamentos];

        // Encontre o índice do dia no array de datas
        const diaIndex = gerarProximosDias().findIndex((data) => data.getDate() === dia.getDate());

        // Verifique se o dia é válido, se o horário não está agendado e se não está em horários indisponíveis
        if (diaIndex !== -1 && !novosAgendamentos[diaIndex]?.includes(horario) && !horariosIndisponiveis.includes(horario)) {
            // Se o array de agendamentos para o dia ainda não existir, crie-o
            if (!novosAgendamentos[diaIndex]) {
                novosAgendamentos[diaIndex] = [];
            }

            // Agende o horário para o dia especificado
            novosAgendamentos[diaIndex].push(horario);

            // Atualize o estado de agendamentos
            setAgendamentos(novosAgendamentos);
        }
    };

    useEffect(() => {
        // Carregar os horários indisponíveis inicialmente (por exemplo, 13:00 e 13:30)
        setHorariosIndisponiveis(['13:00', '13:30']);
    }, []);

    return (
        <div className="agendamento-pagina">
            <h2>Agendamentos</h2>
            <button
                className="agendamento-botao"
                onClick={() => setMostrarTodasAsSemanas(!mostrarTodasAsSemanas)}
            >
                {mostrarTodasAsSemanas ? 'Mostrar 4 Dias' : 'Mostrar 7 Dias'}
            </button>
            <table className="agendamento-tabela">
                <thead>
                    <tr>
                        <th>Hora</th>
                        {gerarProximosDias().map((dia, index) => (
                            <th key={index} className="agendamento-dia">
                                {diasDaSemana[dia.getDay()]} {dia.getDate()}/{dia.getMonth() + 1}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {gerarHorarios(diaAtual).map((item, index) => (
                        <tr key={index}>
                            <td className="agendamento-hora">{item.horario}</td>
                            {gerarProximosDias().map((dia, indexDia) => (
                                <td key={indexDia} className="agendamento-horario">
                                    <DisponibilidadeIcones estado={dia.getDate() === diaAtual.getDate() ? item.disponibilidade : 'disponivel'} />
                                    {/* Botão para agendar horário */}
                                    <button onClick={() => agendarHorario(dia, item.horario)}>Agendar</button>
                                </td>
                            ))}
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default Agendamentos;
